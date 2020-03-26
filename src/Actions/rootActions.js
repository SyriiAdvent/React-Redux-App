import axios from "axios"

const PRIVATE_KEY = 'private_key=8dffe26d0c4946b1923011ad9088fe88a7413c12d9774b768f086ff91abba4d2'
const DATA_VALUES = 'data=AC,MIMO,CJ,FC,FCM'
const TEST_URL = 'https://staging.xivapi.com/character/9404354?data=AC,MIMO,CJ,FC,FCM'
const PLAYER_URL = 'https://staging.xivapi.com/character/'
const SEARCH_URL =`https://xivapi.com/character/search?name=`

export const FETCH_DATA = 'FETCH_DATA'
export const SEARCH_PLAYER = 'SEARCH_PLAYER'

export const fetchData = (key) => dispatch => {
  axios(`${PLAYER_URL}${key}?${DATA_VALUES}`)
    .then(res => {
      console.log(`player data retrieved`, res)
      dispatch({
        type: FETCH_DATA,
        payload: res
      })
    })
    .catch(error => console.log(`Failed to player data`, error))
}

export const searchPlayer = (key) => dispatch => {
  axios(`${SEARCH_URL}${key}`)
      .then(res => {
        (console.log(`Search Data Retrieved`, res))
        dispatch({
          type: SEARCH_PLAYER,
          payload: res
        })
      })
      .catch(error => console.log(`Failed to retrieve data`, error))
}