import React from 'react'
import Tour from './Tour';

const Tours = ({tours,removeTour,fetchTours}) => {


  if (tours.length === 0) {
    return (
      <main>
        <h2>No tours left</h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </main>
    );
  }
  return (
    <div className='title'>
      <h1>Our Tours</h1>
      
      {tours.map((tour)=> <Tour key={tour.id} {...tour} removeTour={removeTour}/>)}
    </div>
  )
}

export default Tours