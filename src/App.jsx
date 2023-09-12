import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, Link, useParams, useLocation} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Players from './Players';


function App() {
  const [players, setPlayers] = useState([]);
  const location = useLocation();
  const {pathname} = location;


  useEffect(()=>{
    const fetchPlayers = async()=>{
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
      const {data} = response.data;
      const {players} = data
      setPlayers (players);    
    }
    fetchPlayers();
  },[]);


  return (
    <>
    <nav>
      <Link to ='/'>Home </Link>
      <Link to ='/players'>Players </Link>
    </nav>

    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/players' element={<Players players = {players}/>}/> 
    </Routes>

    </>
  )
}

export default App
