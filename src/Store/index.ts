import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'

import { materialsApi } from "./api/materials";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [materialsApi.reducerPath]: materialsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(materialsApi.middleware),
});

export default store;
