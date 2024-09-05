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

          <img className="profile-picture" src="https://cdn-icons-png.flaticon.com/512/10337/10337525.png" />
          
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
