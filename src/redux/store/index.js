import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchGamesReducer from "../reducers/fetchGameReducer";

const rootReducer = combineReducers({
  game: fetchGamesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
