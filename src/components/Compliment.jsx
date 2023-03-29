import React from 'react'

const Compliment = ({ id, language, nativeCompliment, translation }) => {
  return (
    <div>
      <div>id: {id}</div>
      <div>Language: {language}</div>
      <div>Compliment: {nativeCompliment}</div>
      <div>Translation: {translation}</div>
    </div>
  )
}

export default Compliment