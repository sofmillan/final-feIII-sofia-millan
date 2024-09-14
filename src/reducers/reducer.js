export const reducer = (state, action) => {
	switch (action.type) {
	  case "GET_DENTISTS":
		return { ...state, dentists: action.payload };
	  case "ADD_FAV":
		return { ...state, favs: [...state.favs, action.payload] };  
	  case "CHANGE_THEME":
		return { ...state, theme: state.theme === "light" ? "dark" : "light" };
	  default:
		throw new Error();
	}
  };