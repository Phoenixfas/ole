import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/reducers";
import { persistStore, persistReducer } from 'redux-persist';


export const store = configureStore({
  reducer: rootReducer
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
