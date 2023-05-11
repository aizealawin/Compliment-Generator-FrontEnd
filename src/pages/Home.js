import React from 'react'
import { useEffect, useState } from 'react'
import Compliment from '../components/Compliment'
import Client from '../services/api'
import MoreInfo from '../components/MoreInfo'
import Popup from 'reactjs-popup'


const Home = () => {
  const [complimentList, setComplimentList] = useState([])
  const [randComp, setRandComp] = useState([])
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

  
  let randomCompliment = complimentList[Math.floor(Math.random() * complimentList.length)] 

  useEffect(()=> {
    const randomComp = async () => {
      setRandComp(randomCompliment)
    }
    randomComp()
  }, [])

  const refresh =() =>{
    randomCompliment = complimentList[Math.floor(Math.random() * complimentList.length)]
    setRandComp(randomCompliment)
  }

  return (
    <div className='body'>
            <Popup trigger=
                {<button> More Info </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Kusal Tholka Mudalige
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
      
      
      {
      hasLoaded && (<Compliment 
        id={randomCompliment.id} 
        language={randomCompliment.language} 
        nativeCompliment={randomCompliment.nativeCompliment} 
        translation={randomCompliment.translation}/>
      )
      
    }

    <button className='refresh' onClick={refresh}>Refresh</button>

    
    
    </div>
  )
}

export default Home