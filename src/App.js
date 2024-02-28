import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}
