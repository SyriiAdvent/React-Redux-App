import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { FETCH_DATA } from '../Actions/rootActions'

const Minions = () => {
  const dispatch = useDispatch()
  const [searchField, setSearchField] = useState('')

  const user = useSelector(state => ({
    pendingData: state.pendingData,
    minions: state.minions,
    user: state.user
  }), shallowEqual)
  
  const handleChange = e => {
    setSearchField(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: FETCH_DATA,
      payload: searchField
    })
  }
  
  return (
    <div>
        <input value={searchField} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Minions
