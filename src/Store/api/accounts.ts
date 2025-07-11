import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AuthLoginRequest,
  AuthLoginResponse,
  User,
  UserUpdateRequest,
  UserCreateRequest,
} from "../types";
import getCSRFToken from "@/Controllers/getCSRFToken";

const SERVER_PATH = "/api/accounts/";

// Define a service using a base URL and expected endpoints
export const accountsApi = createApi({
  reducerPath: "accountsApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_PATH, credentials: "include" }),
  tagTypes: ["User", "UserList"],
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

    getUsers: build.query<User[], void>({
      query: () => "users/",
      providesTags: ["UserList"],
    }),

    getUserById: build.query<User, string>({
      query: (id) => `users/${id}/`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    createUser: build.mutation<User, UserCreateRequest>({
      query: (newUser) => ({
        url: "users/create/",
        method: "POST",
        body: newUser,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
      invalidatesTags: ["UserList"],
    }),

    updateUser: build.mutation<User, { id: string; data: UserUpdateRequest }>({
      query: ({ id, data }) => ({
        url: `users/${id}/update/`,
        method: "PUT",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        "UserList",
      ],
    }),

    deleteUser: build.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}/delete/`,
        method: "DELETE",
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
      invalidatesTags: ["UserList"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
} = accountsApi;
