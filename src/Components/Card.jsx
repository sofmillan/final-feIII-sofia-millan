import React from "react";
import { Link } from "react-router-dom";
import {useDentistState} from '../Context/Context'
const Card = ({dentist }) => {
  const {name, username, id} = dentist;
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    let existingArray = JSON.parse(localStorage.getItem("favs")) || [];


    let dentist1 = existingArray.find(d =>d.id ===id);
    console.log(dentist1);
    if(dentist1){
      alert("This dentist was already added")
    }else{
      existingArray.push(dentist);
      alert("Your dentist has been added to favs")
    }
 
    localStorage.setItem("favs", JSON.stringify(existingArray));
  }

  const { state, toggleTheme } = useDentistState();

  // const currentTheme = state.theme === "light" ? lightTheme : darkTheme;

  return (
    <div className= {state.theme === "light" ? " card card-light":" card card-dark"}>
        {/* En cada card deberan mostrar en name - username y el id */}
          <img src="https://preview.redd.it/ive-only-seen-season-1-of-pok%C3%A9mon-and-jigglypuff-is-to-me-v0-09u2n2roivob1.png?auto=webp&s=1e5260b0a47027fac3ba1ab5f37bc8cf8f27853b" width="200"/>
          <p>{id}</p>
          <p>{name}</p>
          <p>{username}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/detail/"+id}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3qTuLA-swxAHRr-0k7CY-WfbGzVTcLnfzA&s" width="50"/>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
