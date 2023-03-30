import React from 'react'

const Compliment = ({ id, language, nativeCompliment, translation }) => {
  return (
    <div className='compliment-holder'>
      {/* <div>id: {id}</div> */}
      <div className='language'>Language: {language}</div>
      <div className='compliment'>Compliment: {nativeCompliment}</div>
      <div className='translation'>Translation: {translation}</div>
    </div>
  )
}

export default Compliment