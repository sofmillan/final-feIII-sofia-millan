import { Link } from "react-router-dom";
import {useDentistState} from '../Context/Context'

const Card = ({ dentist }) => {
  const {name, username, id} = dentist;

  const addFav = ()=>{

    let favoriteDentists = JSON.parse(localStorage.getItem("favs")) || [];

    let foundDentist = favoriteDentists.find(favDentist => favDentist.id === id);
   
    if(foundDentist){
      alert("This dentist was already added");
    }else{
      favoriteDentists.push(dentist);
      alert("Your dentist has been added to favs");
    }
 
    localStorage.setItem("favs", JSON.stringify(favoriteDentists));
  }

  const { state } = useDentistState();

  return (
    <div className= {state.theme === "light" ? " card card-light":" card card-dark"}>

          <img src="https://preview.redd.it/ive-only-seen-season-1-of-pok%C3%A9mon-and-jigglypuff-is-to-me-v0-09u2n2roivob1.png?auto=webp&s=1e5260b0a47027fac3ba1ab5f37bc8cf8f27853b" width="200"/>
          
          <p>{id}</p>
          <p>{name}</p>
          <p>{username}</p>

        <Link to={"/detail/"+id}>
        <button className={state.theme === "light" ? "button-light":"button-dark"}>See detail</button>
        </Link>

        <img onClick={addFav} className="favImg" src="https://i.pinimg.com/originals/fd/e6/e0/fde6e0fc44801d9c14ef90095d52b9de.png"/>

    </div>
  );
};

export default Card;
