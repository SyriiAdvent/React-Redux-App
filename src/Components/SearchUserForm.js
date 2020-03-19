import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchPlayer } from '../Actions/rootActions'

const SearchUserForm = (props) => {
  const [searchField, setSearchField] = useState('')
  
  const handleChange = e => {
    setSearchField(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.searchPlayer(searchField)
  }
  
  return (
    <div>
        <input value={searchField} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isPendingData: state.isPendingData,
  minions: state.minions,
  user: state.user
})

export default connect(mapStateToProps, { searchPlayer })(SearchUserForm)