import { Link } from 'react-router-dom'
import logo from '../assets/triumphLogo.svg'

export default function Navbar({ setIsChatOpen }) {
  return (
    <nav className="flex items-center justify-between px-50 py-4 bg-white">
      {/* Logo and brand name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Triumph Logo" className="w-8 h-8" />
        <Link to="/" className="text-2xl font-bold text-black pl-2">
          Triumph
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        <Link 
          to="/get-name" 
          className="text-black font-normal text-md tracking-wide uppercase"
        >
          TO PLAY LIST
        </Link>
        
        <button 
          onClick={() => setIsChatOpen(true)}
          className="px-6 py-2 bg-black text-white text-md font-medium rounded-full tracking-wide uppercase"
        >
          GET STARTED
        </button>
      </div>
    </nav>
  )
}