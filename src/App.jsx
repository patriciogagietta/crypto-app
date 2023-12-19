import './App.css'
import Cryptos from './components/Cryptos'
import CardDetails from './components/CardDetails'
import Header from './components/Header'
import Error404 from './components/Error404'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [cripto, setCripto] = useState([])
  const [criptoSearch, setCriptoSearch] = useState('')

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
      <Header criptoSearch={criptoSearch} setCriptoSearch={setCriptoSearch}/>
      <Routes>  
        <Route path='/' element={<Cryptos cripto={cripto} criptoSearch={criptoSearch} setCriptoSearch={setCriptoSearch}/>}/>
        <Route path='/:cardName/:cardId/' element={<CardDetails />}></Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
