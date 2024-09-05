import Card from '../Components/Card'
import {useDentistState} from '../Context/Context'

const Home = () => {

  const {state} = useDentistState();

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => <Card key={dentist.id} dentist={dentist}/>)}
      </div>
    </main>
  )
}

export default Home