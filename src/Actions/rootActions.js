import axios from "axios"

const PRIVATE_KEY = 'private_key=8dffe26d0c4946b1923011ad9088fe88a7413c12d9774b768f086ff91abba4d2'
export const FETCH_DATA = 'FETCH_DATA'
export const SEARCH_PLAYER = 'SEARCH_PLAYER'

export const searchPlayer = (key) => dispatch => {
  dispatch({
    type: SEARCH_PLAYER,
    payload: key
  })
  axios(`https://staging.xivapi.com/character/9404354?data=AC,MIMO,CJ,FC,FCM`)
      .then(res => console.log(`Data Retrieved`, res))
      .catch(error => console.log(`Failed to retrieve data`, error))
}