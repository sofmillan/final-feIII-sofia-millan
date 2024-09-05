import { useState } from "react";
import {useDentistState} from '../Context/Context'

const Form = () => {

  const [user, setUser] = useState({
    name:"",
    email:""
  });

  const { state } = useDentistState();
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);


  const handleName = (event) =>{
    setUser({...user, name:event.target.value});
  }

  const handleEmail = (event) =>{
    setUser({...user, email:event.target.value});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if(user.name.trim().length>=5
      && emailRegex.test(user.email)){
      setSuccessMessage(true);
      setErrorMessage(false);

    }else{
      setErrorMessage(true);
      setSuccessMessage(false);
    }
  }

  return (
	<>

  {successMessage ? <h2>Thanks {user.name}, we will contact you soon</h2> :  
   <form onSubmit={handleSubmit} >
    <div>
      <label>Full Name</label>
      <input type="text" value={user.name} onChange={handleName}></input>
    </div>

    <div>
      <label>Email</label>
      <input type="text" value={user.email} onChange={handleEmail}></input>
    </div>

 
    <button className={state.theme === "light" ? "button-light":"button-dark"} type="submit">Submit</button>
  </form> }

  {errorMessage && <h2 style={{color:'maroon'}}>Please verify your info</h2>}

  </>
  )
};

export default Form;
