import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IDiscipline } from "./types";

const SERVER_PATH = "https://jsonplaceholder.typicode.com/";

// Define a service using a base URL and expected endpoints
export const materialsApi = createApi({
  reducerPath: "materialsApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_PATH }),
  endpoints: (build) => ({
    getDisciplines: build.query<IDiscipline, any>({
      // query: (name) => `disciplines/${name}`,
      query: () => `todos/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDisciplinesQuery } = materialsApi;
