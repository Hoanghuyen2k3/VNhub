import React from 'react';
import Home from './components/home/Home';
import './App.css';
import EachFood from './components/food/EachFood';
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
import Place from './components/destinations/Place';
import Contact from './components/contact/Contact';
import Contact2 from './components/contact/Contact2';
import Contact3 from './components/contact/Contact3';
import Contact1 from './components/contact/Contact1';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route  path="/" element={<Nav />}>      
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="festival" element={<Festival />} />
      <Route path="foods" element={<Food />} />
      <Route path="contact" element={<Contact />} >
        <Route index element={<Contact1 />} />
        <Route path="1" element={<Contact1 />} />
        <Route path="2" element={<Contact2 />} />
        <Route path="3" element={<Contact3 />} />

      </Route>

      <Route path="attractions" element={<Attractions />} />
      <Route path="attractions/:id" element={<Place />} /> 
      <Route path="foods/:id" element={<EachFood />} /> 


      
    </Route>))
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
