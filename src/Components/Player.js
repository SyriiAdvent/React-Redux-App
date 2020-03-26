import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../Actions/rootActions'

const Player = props => {

  // useEffect(() => {
  //   if(!props.isPendingSearchData) {
  //     fetchData(props.searchData.data.Results[0].ID)
  //   }
  // }, [props.isPendingSearchData])

  return (
    <div>
      {!props.isPendingSearchData ?
        (props.searchData.data.Results.map( ele => <div key={ele.ID} onClick={() => props.fetchData(ele.ID)}>{ele.Name} - {ele.Server}</div>)) : null}

      {!props.isPendingPlayerData ? 
        (props.character.data.Minions.map( ele => <p key={ele.Name}>{ele.Name}</p>)) : null}

      <button onClick={() => console.log(props.searchData)}>Search Data</button>
      <button onClick={() => console.log(props.searchData.data.Results[0].ID)}>player ID</button>
      <button onClick={() => console.log(props.character)}>Player Data</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isPendingSearchData: state.isPendingSearchData,
  isPendingPlayerData: state.isPendingPlayerData,
  character: state.playerData,
  searchData: state.searchData
})

export default connect(mapStateToProps, { fetchData })(Player)
