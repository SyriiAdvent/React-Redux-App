import { FETCH_DATA, SEARCH_PLAYER } from "../Actions/rootActions"

const initialState = {
  isPendingData: true,
  playerName: '',
  minions: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_DATA:
    return {
      ...state,
      ...payload
    }
  case SEARCH_PLAYER:
    return {
      ...state,
      playerName: payload
    }

  default:
    return state
  }
}
