import './App.css'
import Navbar from './components/navbar'
import Main from './pages/home'
import GetName from './pages/getname'
import ToPlay from './pages/toplay'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main status={loggedIn}/>}/>
        <Route path="/name" element={<GetName/>} />
        <Route path="/to-play" element={<ToPlay status={loggedIn}/>} />
      </Routes>
    </>
  )
}

export default App
