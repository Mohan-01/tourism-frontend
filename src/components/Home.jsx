import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from './Card'
import Tour from './Tour'
import { getData } from '../helpingFunctions'

const Home = ({setMessage, navigate, setError}) => {
    let [tours, setTours] = useState([]);
    
    useEffect(() => {
      getData('/api/v1/tours/', setTours, setMessage, navigate, setError);
    }, [navigate, setError, setMessage]);

  return (
    <main className='main-body'>
      <Routes>
        <Route path='tour/:id' element={<Tour  />}/>
      </Routes>
      {
          tours.length
          ? tours.map(tour => <Card key={tour._id} tour={tour}/>)
          : null
      }
    </main>
  )
}

export default Home
