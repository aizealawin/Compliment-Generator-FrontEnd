import React from 'react'
import { useEffect, useState } from 'react'
import Compliment from '../components/Compliment'
import axios from 'axios'

const Home = () => {
  const [complimentList, setComplimentList] = useState([])

  useEffect(() => {
    const getComplimentList = async () => {
      const response = await axios.get(`/get/compliments`)
      setComplimentList(response?.data.compliments)
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