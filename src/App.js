import React from 'react';
import Home from './components/home/Home';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Nav from './components/nav/Nav';
import Food from './components/food/Food';
import Festival from './components/festival/Festival';
import Attractions from './components/destinations/Attractions';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route  path="/" element={<Nav />}>      
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="festival" element={<Festival />} />
      <Route path="foods" element={<Food />} />
      <Route path="attractions" element={<Attractions />} />

      
    </Route>))
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
