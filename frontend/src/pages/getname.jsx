import { Link } from "react-router-dom";

export default function GetName({ setInputValue }) {
  
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <h1>enter your name</h1>
            
            <input 
                type="text" 
                onChange={handleChange}
                placeholder="enter your name"
            />

            <Link to="/to-play">SEE YOUR PICKS</Link>
        </>
    );
}