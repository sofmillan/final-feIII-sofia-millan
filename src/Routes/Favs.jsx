import Card from "../Components/Card";
import { useDentistState } from "../Context/Context";

const Favs = () => {
  const { state } = useDentistState();
  return (
    <>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favs.map(favDentist => <Card key={favDentist.id} dentist={favDentist}/>)}
      </div>
    </>
  );
};

export default Favs;
