import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/'+params.id;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url)
    .then(res=>{
      setDentist(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })
    },[])
  return (
    <>
      <div>
      {loading ? (
        "Hagamos de cuenta que soy un spinner..."
      ) : (
        <>
          <h1>{dentist.name}</h1>
          <p>{dentist.email}</p>
          <p>{dentist.username}</p>
          <p>{dentist.phone}</p>
        </>
      )}
    </div>
    </>
  )
}

export default Detail