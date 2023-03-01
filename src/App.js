import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";

import Home from './component/home/Home'
import Navbar from './component/Navbar'
import Shop from './component/Shop'
import About from './component/About'
import Blog from './component/Blog'
import Contact from './component/Contact'
import Pages from './component/Pages'


function App() {
  return (
    <Router>
    <div className='app-container'>
      
     <Navbar />
     <Routes>
           <Route path='/' element={<Home />} />
           <Route path= '/shop' element={<Shop />} />
           <Route path= '/about' element={<About/>} />
           <Route path= '/blog' element={<Blog />} />
           <Route path= '/contact' element={<Contact />} />
           <Route path= '/pages' element={<Pages />} />
           
     </Routes>
     </div>
    </Router>
  );
}

export default App;
