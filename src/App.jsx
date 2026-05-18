import React  from 'react'
import './App.css'
import './assets/styles/bunnibuy.css'
import { Route , Routes } from 'react-router-dom'
import Landingpage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'

function App() {
  
  return (
    <>
    <div className="bunni-buy">
        <Routes>
          <Route element={<Landingpage/>} path='/'/>
          <Route element={<AdminPortal/>} path='/adminportal/*'/>
        </Routes>
    </div>
    </>
  )
}

export default App
