import { Link } from 'react-router-dom'

export default function Navbar({ setIsChatOpen }) {
  return (
    <>
      <Logo></Logo>
      <h1>Triumph</h1>
      <Link to="/get-name"></Link>
      <button onClick={() => setIsChatOpen(true)}>Get Started</button>
    </>
  )
}