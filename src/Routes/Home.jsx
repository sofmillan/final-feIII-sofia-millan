import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [dentists, setDentists] = useState([]);
  useEffect(() => {
	axios.get(url)
	.then(res=>setDentists(res.data))
  },[])
  console.log(dentists);
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(d => <Card id={d.id} name={d.name} username={d.username}/>)}
      </div>
    </main>
  )
}

export default Home