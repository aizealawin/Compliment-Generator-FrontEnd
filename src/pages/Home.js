import React from 'react'
import { useEffect, useState } from 'react'
import Compliment from '../components/Compliment'
import Client from '../services/api'

const Home = () => {
  const [complimentList, setComplimentList] = useState([])

  useEffect(() => {
    const getComplimentList = async () => {
      const response = await Client.get(`compliments`)
      setComplimentList(response.data)
    }
    getComplimentList()
  }, [])
  
  const randomCompliment = complimentList[Math.floor(Math.random() * complimentList.length)] 



  return (
    <div>
      <Compliment id={randomCompliment.id} language={randomCompliment.language} nativeCompliment={randomCompliment.nativeCompliment} translation={randomCompliment.translation}/>
    </div>
  )
}

export default Home