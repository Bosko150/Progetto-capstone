import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchGamesReducer from "../reducers/fetchGameReducer";
import fetchSingleGameReducer from "../reducers/fetchSingleGameReducer";
import fetchUserReducer from "../reducers/fetchUserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = { key: "root", storage };
const rootReducer = combineReducers({
  games: fetchGamesReducer,
  single_game: fetchSingleGameReducer,
  user: fetchUserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
