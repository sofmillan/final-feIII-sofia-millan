import { Link } from "react-router-dom"
import { useDentistState } from '../Context/Context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useDentistState();
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
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>
        Switch to {state.theme === "light" ? "dark" : "light"} mode
      </button>
    </nav>
  )
}

export default Navbar