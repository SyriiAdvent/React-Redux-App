import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

const Player = () => {
  const character = useSelector( state => ({
    playerName: state.playerName
  }), shallowEqual)
  
  return (
    <div>
      <h4>{character.playerName}</h4>
    </div>
  )
}

export default Player
