import Form from '../Components/Form'
import {useDentistState} from '../Context/Context'

const Contact = () => {
  return (
    <div className="contact">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact