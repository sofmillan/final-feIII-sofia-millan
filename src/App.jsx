
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useDentistState } from './Context/Context';

function App() {
  const { state, toggleTheme } = useDentistState();
  return (
      <div className={state.theme === "light" ? "app-light":"app-dark"}>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favs" element={<Favs/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
