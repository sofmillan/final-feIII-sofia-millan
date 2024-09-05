import React from 'react'

import {
	createContext,
	useContext,
	useState,
	useEffect,
	useReducer,
  } from "react";
  
import axios from 'axios';

  const DentistState = createContext();

  const reducer = (state, action) => {
	switch (action.type) {
	  case "GET_DENTISTS":
		return { ...state, dentists: action.payload };
	  case "ADD_FAVS":
		return { ...state, favs: [...state.favs, action.payload] };
	  default:
		throw new Error();
	}
  };
  const initialState = {
	dentists: [],
	favs: [],
  };
const Context = ({children}) => {
 
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
	axios.get(url)
	.then(res=>{
		console.log("RES DATA");
		console.log(res.data);
		dispatch({ type: "GET_DENTISTS", payload: res.data });
	})
  },[])
  return (
    <DentistState.Provider value={{ state, dispatch }}>
      {children}
    </DentistState.Provider>
  );
}

export default Context

export const useDentistState = () => useContext(DentistState);