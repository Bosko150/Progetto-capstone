import { GET_GAME, GET_FILTERED_GAMES, NO_RESULTS_FOUND } from "../actions";

const initialState = {
  games: [],
  filteredGames: [],
  noResults: false,
};

const fetchGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state,
        games: action.payload,
      };
    case GET_FILTERED_GAMES:
      return {
        ...state,
        filteredGames: action.payload,
      };
    case NO_RESULTS_FOUND:
      return {
        ...state,
        noResults: action.payload,
      };
    default:
      return state;
  }
};
export default fetchGamesReducer;
