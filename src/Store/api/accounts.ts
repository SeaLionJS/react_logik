import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthLoginRequest, AuthLoginResponse, User } from "../types";
import getCSRFToken from "@/Controllers/getCSRFToken";

const SERVER_PATH = "/api/accounts/";

// Define a service using a base URL and expected endpoints
export const accountsApi = createApi({
  reducerPath: "accountsApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_PATH, credentials: "include" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    login: build.mutation<AuthLoginResponse, AuthLoginRequest>({
      query: (credentials) => ({
        url: "auth/login/",
        method: "POST",
        body: credentials,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
      invalidatesTags: ["User"],
    }),
    logout: build.mutation<{ detail: string }, void>({
      query: () => ({
        url: "auth/logout/",
        method: "POST",
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
      invalidatesTags: ["User"],
    }),
    getCurrentUser: build.query<User, void>({
      query: () => "auth/user/",
      providesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useLogoutMutation, useGetCurrentUserQuery } =
  accountsApi;
