import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'

import { accountsApi } from "./api/accounts";
import { academicsApi } from "./api/academics";
import { shopApi } from "./api/shop";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [accountsApi.reducerPath]: accountsApi.reducer,
    [academicsApi.reducerPath]: academicsApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    theme: themeReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountsApi.middleware,
      academicsApi.middleware,
      shopApi.middleware
    ),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
