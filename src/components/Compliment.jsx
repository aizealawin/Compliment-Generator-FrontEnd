import React from 'react'

const Compliment = ({ id, language, nativeCompliment, translation }) => {
  return (
    <div className='compliment-holder'>
      {/* <div>id: {id}</div> */}
      <div className='compliment inner'>Compliment: {nativeCompliment}</div>
      <div className='language, inner'>Language: {language}</div>
      <div className='translation inner'>Translation: {translation}</div>
    </div>
  )
}

export default Compliment