
import './App.css';
import  React , { Component } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';

import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Index from './Components/index';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';
import About from './Components/About';

class App extends Component{
  render(){
  return (
   
    <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route  exact  path='/' element={<Index/>}></Route> 
    <Route  exact  path='/contact' element={<Contact/>}></Route> 
    <Route  exact  path='/work' element={<Work/>}></Route> 
    <Route  exact  path='/portfolio' element={<Portfolio/>}></Route> 
    <Route  exact  path='/about' element={<About/>}></Route> 
    </Routes>
    </BrowserRouter>
   
  
  )
  }
}

export default App;
