import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [inputValue, setInputValue] = useState("")

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    // if the user types "What is this company about" then we go to the about page
    // else nothing
    if (inputValue === "What is this company about?") {
      navigate('/about');
    }
    console.log(inputValue);
  }
  return (
    <div style={{backgroundColor: "lightcyan"}}>

      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home