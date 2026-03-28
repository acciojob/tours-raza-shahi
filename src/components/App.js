import React, { useEffect, useState } from "react";
import {tourData} from './data';
import Loading from './Loading';
import Tours from './Tours';
import "../styles/App.css";


const App = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [tours,setTours] = useState([]);

    const removeTour = (id)=>{
      const newTours = tours.filter((tour)=> tour.id !=id);
      setTours(newTours);
    }

    const fetchTours = ()=>{
      setIsLoading(true);
      setTimeout(()=>{
        setTours(tourData);
        setIsLoading(false);
      },500);
    }

    useEffect(()=>{
      fetchTours();
    },[]);

    return(
      <main id="main">
        {isLoading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours}/>}
      </main>
    )
}
export default App;
