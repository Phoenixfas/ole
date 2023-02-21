import { combineReducers } from "@reduxjs/toolkit";
import initHeroToggleReducer from "./initHeroToggleSlice";
import tipModalToggleReducer from "./tipModalToggleSlice";
import picModalToggleReducer from "./picModalToggleSlice"
import activeTipReducer from "./activeTipSlice";
import activePicReducer from "./activePicSlice";

export const rootReducer = combineReducers({
  initHeroToggle: initHeroToggleReducer,
  tipModalToggle: tipModalToggleReducer,
  picModalToggle: picModalToggleReducer,
  activeTip: activeTipReducer,
  activePic: activePicReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
