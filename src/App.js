import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import MyNav from "./componets/MyNav"
import Home from "./componets/Home"
import Kurslar from "./componets/Kurslar";
import Iletisim from "./componets/Iletisim";
import Kisiler from "./componets/Kisiler";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className='App'>
    <Router>
      <MyNav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kurslar' element={<Kurslar/>}/>
      <Route path='/iletisim' element={<Iletisim/>}/>
      <Route path='/kisiler' element={<Kisiler/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}



export default App;