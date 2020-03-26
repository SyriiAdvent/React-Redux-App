import { FETCH_DATA, SEARCH_PLAYER } from "../Actions/rootActions";

const initialState = {
  isPendingSearchData: true,
  isPendingPlayerData: true,
  searchName: "",
  searchData: {},
  playerData: {}
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PLAYER:
      return {
        ...state,
        searchData: payload,
        isPendingSearchData: false
      };
    case FETCH_DATA:
      return {
        ...state,
        playerData: payload,
        isPendingPlayerData: false
      };

    default:
      return state;
  }
};
