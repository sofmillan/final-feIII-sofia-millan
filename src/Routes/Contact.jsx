import React from 'react'
import Form from '../Components/Form'
import {useDentistState} from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state, toggleTheme } = useDentistState();

  return (
    <div className={state.theme === "light" ? "contact contact-light":"contact contact-dark"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact