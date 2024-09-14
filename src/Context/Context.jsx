import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

const DentistState = createContext();

const favDentists = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  dentists: [],
  favs: favDentists,
  theme: "light",
};

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: "GET_DENTISTS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <DentistState.Provider value={{ state, dispatch }}>
      {children}
    </DentistState.Provider>
  );
};

export default Context;

export const useDentistState = () => useContext(DentistState);
