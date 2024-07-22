import { GET_GAME } from "../actions";

const initialState = {
  games: [],
};

const fetchGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};
export default fetchGamesReducer;
