import { combineReducers } from "@reduxjs/toolkit";
import initHeroToggleReducer from "./initHeroToggleSlice";

export const rootReducer = combineReducers({
  initHeroToggle: initHeroToggleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
