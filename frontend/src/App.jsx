import './App.css'
import Navbar from './components/navbar'
import Main from './pages/home'
import GetName from './pages/getname'
import ToPlay from './pages/toplay'
import {Routes, Route} from 'react-router-dom'
import {useState, useLocation, useEffect} from 'react'

function App() {

  const [chatWidget, setChatWidget] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const location = useLocation();

  // clears the input name (username) everytime the user leaves the dashboard
  useEffect(() => {
    if (location.pathname !== '/to-play') {
      setInputValue('');
    }
  }, [location.pathname]);

  // sets the chat widget to hidden eveytime the page changes
  useEffect(() => {
    setChatWidget(false);
  }, [location.pathname]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main status={chatWidget}/>}/>
        <Route path="/get-name" element={<GetName/>}/>
        <Route path="/to-play" element={<ToPlay status={inputValue}/>}/>
      </Routes>
    </>
  )
}

export default App
