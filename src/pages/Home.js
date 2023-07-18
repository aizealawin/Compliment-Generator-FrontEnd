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
                                <p>Hello, I'm Kusal!</p>
                                <p>Thank you for taking the time to check out this little app I made! I have a passion for language and uplifting others so I decided to practice my Spring knowledge to develop an API that combined the two thoughts. All compliments are sourced from friends and family so I apologize for any discrepencies or translation errors!</p>

                                <p>If you're interest in contributing a compliment of your own or find a bug please feel free to reach out with the links below!</p>
                            </div>
                            <div className='links'>
                              <a> Twitter </a>
                              <a> LinkedIn </a>
                              <a> Github</a>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
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