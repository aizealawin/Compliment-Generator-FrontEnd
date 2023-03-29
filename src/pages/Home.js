import React from 'react'
import { useEffect, useState } from 'react'
import Compliment from '../components/Compliment'
import Client from '../services/api'

const Home = () => {
  const [complimentList, setComplimentList] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const getComplimentList = async () => {
      const response = await Client.get(`compliments`)
      setComplimentList(response.data)
      if (complimentList.length >= 0){
        setHasLoaded(true)
      }
    }
    getComplimentList()
  }, [])
  console.log(hasLoaded)
  console.log(complimentList)
  
  const randomCompliment = complimentList[Math.floor(Math.random() * complimentList.length)] 



  return (
    <div>
      {hasLoaded && <Compliment id={randomCompliment.id} language={randomCompliment.language} nativeCompliment={randomCompliment.nativeCompliment} translation={randomCompliment.translation}/>}
    </div>
  )
}

export default Home