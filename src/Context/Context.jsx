import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const DentistState = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
};

const initialState = {
  dentists: [],
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

  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <DentistState.Provider value={{ state, dispatch, changeTheme }}>
      {children}
    </DentistState.Provider>
  );
};

export default Context;

export const useDentistState = () => useContext(DentistState);
