import Card from "../Components/Card";

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];
  return (
    <>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {favs.map(favDentist => <Card key={favDentist.id} dentist={favDentist}/>)}
      </div>
    </>
  );
};

export default Favs;
