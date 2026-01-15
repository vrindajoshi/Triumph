import './App.css'
import Navbar from './components/navbar'
import Main from './pages/home'
import GetName from './pages/getname'
import ToPlay from './pages/toplay'
import VoiceflowOverlay from './components/voiceflowoverlay'
import {Routes, Route, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/to-play') {
      setInputValue('');
      setIsChatOpen(false)
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar setIsChatOpen={setIsChatOpen} />
      <Routes>
        <Route path="/" element={<Main setIsChatOpen={setIsChatOpen} />}/>
        <Route path="/get-name" element={<GetName setInputValue={setInputValue} inputValue={inputValue} />}/>
        <Route path="/to-play" element={<ToPlay inputValue={inputValue} />}/>
      </Routes>
      <VoiceflowOverlay isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  )
}

export default App