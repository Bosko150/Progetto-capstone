import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchGamesReducer from "../reducers/fetchGameReducer";
import fetchSingleGameReducer from "../reducers/fetchSingleGameReducer";

const rootReducer = combineReducers({
  games: fetchGamesReducer,
  single_game: fetchSingleGameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
