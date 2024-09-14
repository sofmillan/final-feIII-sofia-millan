import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isNaN(params.id)) {
      axios.get(url).then((res) => {
        setDentist(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      });
    }
  }, []);

  return (
    <div className="detail">
      {loading ? (
        <img src="https://cdn-icons-png.flaticon.com/512/6356/6356612.png" />
      ) : (
        <>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.website}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Detail;
