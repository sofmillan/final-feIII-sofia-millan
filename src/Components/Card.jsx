import { Link } from "react-router-dom";
import {useDentistState} from '../Context/Context'

const Card = ({ dentist }) => {
  const {name, username, id} = dentist;
  const { state, dispatch } = useDentistState();

  const addFav = ()=>{

    let favoriteDentists = state.favs;

    let foundDentist = favoriteDentists.find(favDentist => favDentist.id === id);
   
    if(foundDentist){
      alert("This dentist was already added");
    }else{
      dispatch({ type:"ADD_FAV", payload: dentist });
      alert("Your dentist has been added to favs");
    }
   }


  return (
    <div className= {state.theme === "light" ? " card card-light":" card card-dark"}>

        <Link to={"/detail/"+id}>
          <img className="profile-picture" src="https://cdn-icons-png.flaticon.com/512/10337/10337525.png" />
          <p>{name}</p>
        </Link>
        
        <p>{username}</p>
        <p>{id}</p>

        <img onClick={addFav} className="favImg" src="https://i.pinimg.com/originals/fd/e6/e0/fde6e0fc44801d9c14ef90095d52b9de.png"/>

    </div>
  );
};

export default Card;
