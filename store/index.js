import { configureStore, combineReducers } from "@reduxjs/toolkit";
import player from "./slices/playerSlice";
const rootReducer = combineReducers({
  player: player,
  devTools: process.env.NODE_ENV !== "production",
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
