import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./redux/features/users";
import themeReducer from "./redux/features/theme";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
