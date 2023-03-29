import React from 'react'
import { useEffect, useState } from 'react'
import Compliment from '../components/Compliment'
import axios from 'axios'
import Client from '../services/api'

const Home = () => {
  const [complimentList, setComplimentList] = useState([])

  useEffect(() => {
    const getComplimentList = async () => {
      const response = await Client.get(`compliments`)
      setComplimentList(response?.data.compliments)
      console.log(response)
    }
    getComplimentList()
  }, [])


  return (
    <div>
      HOME
    </div>
  )
}

export default Home