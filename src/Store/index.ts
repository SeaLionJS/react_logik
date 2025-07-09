import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'

import { accountsApi } from "./api/accounts";
import { academicsApi } from "./api/academics";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [accountsApi.reducerPath]: accountsApi.reducer,
    [academicsApi.reducerPath]: academicsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountsApi.middleware,
      academicsApi.middleware
    ),
});

export default store;
