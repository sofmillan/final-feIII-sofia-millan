import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setDentist(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);
  return (
    <>
      <div className="detail">
        {loading ? (
          "Hagamos de cuenta que soy un spinner..."
        ) : (
          <>
            <table border="1">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.username}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
              </tr>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
