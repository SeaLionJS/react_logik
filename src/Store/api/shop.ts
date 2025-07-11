import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getCSRFToken from "@/Controllers/getCSRFToken";

import { Order, Favorite, Product } from "../types";
const SERVER_PATH = "/api/shop";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_PATH,
    credentials: "include",
  }),
  tagTypes: ["Product", "Favorite", "Order"],
  endpoints: (build) => ({
    // ---------- Products ----------
    getProducts: build.query<Product[], void>({
      query: () => "products/",
    }),
    getProduct: build.query<Product, string>({
      query: (id) => `products/${id}/`,
    }),
    createProduct: build.mutation<Product, Partial<Product>>({
      query: (data) => ({
        url: "products/",
        method: "POST",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),
    updateProduct: build.mutation<
      Product,
      { id: string; data: Partial<Product> }
    >({
      query: ({ id, data }) => ({
        url: `products/${id}/`,
        method: "PUT",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),
    deleteProduct: build.mutation<void, string>({
      query: (id) => ({
        url: `products/${id}/`,
        method: "DELETE",
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),

    // ---------- Favorites ----------
    getFavorites: build.query<Favorite[], void>({
      query: () => "favorites/",
    }),
    createFavorite: build.mutation<Favorite, { product_id: string }>({
      query: (data) => ({
        url: "favorites/",
        method: "POST",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),
    deleteFavorite: build.mutation<void, string>({
      query: (id) => ({
        url: `favorites/${id}/`,
        method: "DELETE",
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),

    // ---------- Orders ----------
    getOrders: build.query<Order[], void>({
      query: () => "orders/",
    }),
    getOrder: build.query<Order, string>({
      query: (id) => `orders/${id}/`,
    }),
    createOrder: build.mutation<
      Order,
      { product_id: string; quantity: number }
    >({
      query: (data) => ({
        url: "orders/",
        method: "POST",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),
    updateOrder: build.mutation<Order, { id: string; data: Partial<Order> }>({
      query: ({ id, data }) => ({
        url: `orders/${id}/`,
        method: "PUT",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),
    deleteOrder: build.mutation<void, string>({
      query: (id) => ({
        url: `orders/${id}/`,
        method: "DELETE",
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,

  useGetFavoritesQuery,
  useCreateFavoriteMutation,
  useDeleteFavoriteMutation,

  useGetOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = shopApi;
