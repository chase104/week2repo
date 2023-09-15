
import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cards from './pages/Cards'
import axios from 'axios'
import CardData from './pages/CardData'

function App() {


  const [data, setData] = useState([])


  useEffect(() => {
      console.log("cards just rendered!");
      const options = {
          method: 'GET',
          url: 'https://pokemon-tcg-card-prices.p.rapidapi.com/card',
          params: {
            setId: '33ee55f4-30d0-4900-850f-36a351fb9719',
            set: 'vivid-voltage',
            series: 'sword-and-shield'
          },
          headers: {
            'X-RapidAPI-Key': 'e9dd5c505bmsh10af0feb62c21f6p157c6ejsna7ce1a3e1469',
            'X-RapidAPI-Host': 'pokemon-tcg-card-prices.p.rapidapi.com'
          }
        };

        axios(options).then((response) => {
          console.log(response);
          setData(response.data.results)
        })

      return () => {
          console.log("cards is dismounting")
      }
  }, [])








  return (
    <div className='app'>
      <Navbar />  

      {/* show different pages here */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/poke_cards" element={<Cards data={data} />}/>
        <Route path="/one_card" element={<CardData data={data} />}/>

      </Routes>

    </div>
  )
}

export default App
