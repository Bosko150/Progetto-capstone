import {
  TOGGLE_IS_LOGGED,
  TOGGLE_IS_LOGGED_OUT,
  GET_USER_LOGGED_TOKEN,
  GET_USER_LOGGED_PROFILE,
} from "../actions/index";

const initialState = {
  isLogged: false,
  token: "",
  user_info: null,
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case TOGGLE_IS_LOGGED_OUT:
      return {
        ...state,
        isLogged: false,
        user_bearer: "",
        user_info: null,
      };
    case GET_USER_LOGGED_TOKEN:
      return {
        ...state,
        token: action.payload,
        isLogged: true,
      };
    case GET_USER_LOGGED_PROFILE:
      return {
        ...state,
        user_info: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUserReducer;
