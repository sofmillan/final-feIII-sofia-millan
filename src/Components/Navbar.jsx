import { Link } from "react-router-dom"
import { useDentistState } from '../Context/Context';

const Navbar = () => {
  const { state, dispatch } = useDentistState();

  const changeTheme = ()=>{
    dispatch({ type: "CHANGE_THEME" });
  }
  
  return (
    <nav className={state.theme === "light" ? "nav-light":"nav-dark"}>
      
      <Link to="/">
        <h4>Home</h4>
      </Link>

      <Link to="/favs">
        <h4>Favs</h4>
      </Link>

      <Link to="/detail/:id">
        <h4>Detail</h4>
      </Link>

      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
    
      <button onClick={changeTheme} className={state.theme === "light" ? "button-light":"button-dark"}>
        Switch to {state.theme === "light" ? "dark" : "light"} mode
      </button>
    </nav>
  )
}

export default Navbar;