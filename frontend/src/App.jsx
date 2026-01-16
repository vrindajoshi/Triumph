import './App.css'
import Navbar from './components/navbar'
import Main from './pages/home'
import GetName from './pages/getname'
import VoiceflowOverlay from './components/voiceflowoverlay'
import {Routes, Route, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ToPlayWrapper from './components/parents/toplaywrapper.jsx'
import { useNavigate } from 'react-router-dom';
import ToPlay from './pages/toplay.jsx'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  const handleMessage = (event) => {
    console.log('Message received:', event.data);
    
    // Parse if it's a string
    let data;
    try {
      data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
    } catch (e) {
      console.log('Could not parse message');
      return;
    }
    
    console.log('Parsed data type:', data.type);
    
    if (data.type === 'voiceflow:interact') {
      const payload = data.payload;
      const lastTurn = payload?.session?.turns?.slice(-1)[0];
      const messages = lastTurn?.messages || [];
      
      // Find the text message (not the END message)
      const textMessage = messages.find(msg => msg.type === 'text');
      
      console.log('Text message:', textMessage);
      
      const messageText = textMessage?.text?.[0]?.children?.[0]?.text;
      
      console.log('Message text:', messageText);
      
      if (messageText && messageText.includes('Redirecting')) {
        const match = messageText.match(/Redirecting (.+)\.\.\./);
        
        if (match && match[1]) {
          const name = match[1];
          console.log('Extracted name:', name);
          console.log('Redirecting to /to-play with name:', name);
          
          navigate(`/to-play?name=${encodeURIComponent(name)}`);
        }
      }
    }
  };

  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, [navigate]);

  useEffect(() => {
    if (location.pathname !== '/to-play') {
      setInputValue('');
      setIsChatOpen(false)
    }
  }, [location.pathname]);

  // REMOVED the duplicate useEffect here

  return (
    <>
      <Navbar setIsChatOpen={setIsChatOpen} />
      <Routes>
        <Route path="/" element={<Main setIsChatOpen={setIsChatOpen} />}/>
        <Route path="/get-name" element={<GetName setInputValue={setInputValue} inputValue={inputValue} />}/>
        <Route path="/to-play" element={<ToPlayWrapper />} />
        <Route path="/toPlay" element={<ToPlay />} />
      </Routes>
      <VoiceflowOverlay isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  )
}

export default App