import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import Courses from './Pages/Courses'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage/>} path='/'></Route>
        <Route element={<Courses/>} path='/courses'></Route>
        <Route element={<AboutUs/>} path='about'></Route>
        <Route element={<Contact/>} path='/contact'></Route>

      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
