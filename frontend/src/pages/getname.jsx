import { Link, useNavigate } from "react-router-dom";
import Card from "../components/parents/card";
import Background from "../components/parents/background";

export default function GetName({ setInputValue, inputValue }) {
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (inputValue.trim()) {
    navigate(`/to-play?name=${encodeURIComponent(inputValue)}`);
  }
};

  const isValidName = inputValue.trim().length > 0;

  return (
    <Background>
      <Card>
        <form onSubmit={handleSubmit} className="mb-6 text-left leading-tight">
          <h1 className="text-5xl mb-10 font-bold">enter your name</h1>
          <input 
            type="text" 
            className="border border-black rounded-xl py-2 px-4 w-full text-lg mb-10 focus:outline-none focus:ring-2 focus:ring-black transition-all"
            onChange={handleChange}
            value={inputValue}
            placeholder="enter your name"
            autoFocus
          />
          {isValidName ? (
  <button
    type="submit"
    className="inline-block px-8 py-4 bg-black text-white text-md font-medium rounded-xl tracking-wide uppercase hover:bg-gray-800 transition-colors"
  >
    SEE YOUR PICKS
  </button>
) : (
  <button
    type="button"
    disabled
    className="px-8 py-4 bg-gray-300 text-gray-500 text-md font-medium rounded-xl tracking-wide uppercase cursor-not-allowed opacity-60"
  >
    SEE YOUR PICKS
  </button>
)}
        </form>
      </Card>
    </Background>
  );
}