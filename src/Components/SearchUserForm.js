import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { SEARCH_PLAYER, searchPlayer } from '../Actions/rootActions'

const SearchUserForm = () => {
  const dispatch = useDispatch()
  const [searchField, setSearchField] = useState('')

  // const user = useSelector(state => ({
  //   isPendingData: state.isPendingData,
  //   minions: state.minions,
  //   user: state.user
  // }), shallowEqual)
  
  const handleChange = e => {
    setSearchField(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    searchPlayer(searchField)
    // dispatch({
    //   type: SEARCH_PLAYER,
    //   payload: searchField
    // })
  }
  
  return (
    <div>
        <input value={searchField} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchUserForm