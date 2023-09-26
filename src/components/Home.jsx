import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Card from './Card'
import Tour from './Tour'

const Home = ({setMessage}) => {
    let [tours, setTours] = useState([]);
    
    useEffect(() => {
      setMessage('Loading...');
      axios.get('http://127.0.0.1:4201/api/v1/tours/').then(data => {
        data = data.data.data;
        // console.log(data);
        setTours(data);
        setMessage(null);
      }).catch(err => console.log(err))
    }, [setMessage]);

    console.log('Home')
  return (
    <main className='main-body'>
      <Routes>
        <Route path='tour/:id' element={<Tour  />}/>
      </Routes>
      {
          tours.length
          ? tours.map(tour => <Card key={tour._id} tour={tour}/>)
          : 'notThere'
      }
    </main>
  )
}

export default Home
