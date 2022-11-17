// import PropTypes from 'prop-types'
import React from 'react'
const MemoryGame = () => {
  return (
    <div>
      <h1 style={GameTitleStyle}> Memory Game </h1>
      <button className='btn' style={ CardStyle }> CARD </button>
    </div>
    
  )
}

const GameTitleStyle = {
  textAlign: 'center',
  color: 'brown'
}
const CardStyle = {
  // textAlign: 'center',
  color: 'brown',
  // backgroundColor: 'white',
  // border: "thin solid #000000"
}
export default MemoryGame