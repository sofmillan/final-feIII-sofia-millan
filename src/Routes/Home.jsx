import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useDentistState} from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistState();


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentists.map(d => <Card key={d.id} id={d.id} name={d.name} username={d.username}/>)}
      </div>
    </main>
  )
}

export default Home