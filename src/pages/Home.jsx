import { useState, useEffect } from 'react'
import axios from "axios"
import CurrencyList from '../components/CurrencyList'
import Total from '../components/Total'
import Header from '../components/Header'


const API = "https://api.coinstats.app/public/v1/coins"

const Home = () => {
 
  const [search, setSearch] = useState("")
  const [currencies, setCurrencies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    const loadCurrency = async () => {
      try {
        const response = await axios.get(`${API}?limit=${limit}`)
      const data = await response.data.coins
      setIsLoading(false)
      setIsError(false)
      setCurrencies(data)
      }catch(error) {
        setIsLoading(false)
      setIsError(true)
      setCurrencies([])
      console.error(error.message)
      }
    }

    loadCurrency()
  }, [limit])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const loadMore = () => {
    setLimit(limit + 20)
  }

 


  const filteredCurrencies = currencies.filter(currency => currency.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
    <Header search={search} handleSearch={handleSearch} />

    <div className='bg-gradient-to-r to-cyan-500 from-blue-500'>
      <Total currencies={currencies} />
    </div>

    <div>
      {
        isLoading ? (
          <div>
            Loading...
          </div>
        ): (
          
          <CurrencyList currencies={filteredCurrencies} setCurrencies={setCurrencies}  />
          
          
        )
      }

      <div className='w-full flex items-center justify-center my-8'>
        <button className='cursor-pointer bg-green-400 py-2 px-4 shadow-lg text-white rounded-full' onClick={loadMore}>View More</button>
      </div>

  

      { isError ? <div>Error</div> :null}
    </div>

    </div>
  )
}

export default Home