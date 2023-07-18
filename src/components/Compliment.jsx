import React from 'react'

const Compliment = ({ id, language, nativeCompliment, translation }) => {
  return (
    <div className='compliment-holder'>
      {/* <div>id: {id}</div> */}
      <div className='upper' id='compliment'>Compliment: {nativeCompliment}</div>
      <div className='lower' id='language'>Language: {language}</div>
      <div className='lower' id='translation'>Translation: {translation}</div>
    </div>
  )
}

export default Compliment