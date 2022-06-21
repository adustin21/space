import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { useAppDispatch } from './app/hooks';
import CrewWraper from './components/Crew/CrewWrapper';
import DestinationWrapper from './components/Destination/DestinationWrapper';
import Header from './components/Header/Header';
import HomeWrapper from './components/Home/HomeWrapper';
import TechnologyWraper from './components/Technology/TechnologyWrapper';
import { fetchCrew } from './features/crew/crewSlice';
import { fetchDestinations } from './features/destination/destinationSlice';
import { fetchTechnologies } from './features/technologies/technologiesSlice';

function App() {
  const [classMod, setClassMod] = useState(ClassMod.mouse)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchDestinations())
    dispatch(fetchCrew())
    dispatch(fetchTechnologies())
  }, [])
  return (
    <div
    className={`App ${classMod}`}
    onKeyUp={()=>setClassMod(ClassMod.key)}
    onClick={()=>setClassMod(ClassMod.mouse)}>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<HomeWrapper />} />
      <Route path='/destination' element={<DestinationWrapper />} />
      <Route path='/crew' element={<CrewWraper />} />
      <Route path='/technology' element={<TechnologyWraper />} />
    </Routes>
    </Router>
    </div>
  );
}

enum ClassMod{
  mouse = "App__useMouse",
  key = "App__useKey"
}
export default App;
