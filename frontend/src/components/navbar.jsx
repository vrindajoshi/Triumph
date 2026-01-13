import { Link } from 'react-router-dom'

export default function Navbar({ setIsChatOpen }) {
  return (
    <>
        <div></div> {/* set to logo later */}
      <h1>Triumph</h1>
      <Link to="/get-name">TO PLAY LIST</Link>
      <button onClick={() => setIsChatOpen(true)}>GET STARTED</button>
    </>
  )
}