import React from 'react'

const Compliment = ({ id, language, nativeCompliment, translation }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{language}</div>
      <div>{nativeCompliment}</div>
      <div>{translation}</div>
    </div>
  )
}

export default Compliment