import { GET_SINGLE_GAME } from "../actions";

const initialState = {
  game: {},
};

const fetchSingleGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_GAME:
      return {
        ...state,
        game: action.payload,
      };
    default:
      return state;
  }
};
export default fetchSingleGameReducer;
