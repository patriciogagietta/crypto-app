import './App.css'
import Cryptos from './components/Cryptos'
import CardDetails from './components/CardDetails'
import Header from './components/Header'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [cripto, setCripto] = useState([])

  useEffect(() => {
    const getAllData = async () => {
      const url = 'https://api.coinlore.net/api/tickers/'
      try {
        const response = await axios.get(url)
        setCripto(response.data.data)
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    };
    getAllData()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cryptos cripto={cripto}/>}/>
        <Route path='/:cardId/' element={<CardDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
