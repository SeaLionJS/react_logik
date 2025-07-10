import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Discipline, Lesson, Course } from "../types";
import getCSRFToken from "@/Controllers/getCSRFToken";

const SERVER_PATH = "/api/academics";

// Define a service using a base URL and expected endpoints
export const academicsApi = createApi({
  reducerPath: "academicsApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_PATH, credentials: "include" }),
  endpoints: (build) => ({
    getDisciplines: build.query<Discipline[], void>({
      query: () => "disciplines/",
    }),

    createDiscipline: build.mutation<Discipline, Partial<Discipline>>({
      query: (data) => ({
        url: "disciplines/",
        method: "POST",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),

    getLessons: build.query<Lesson[], void>({
      query: () => "/academics/lessons/",
    }),

    createLesson: build.mutation<Lesson, Partial<Lesson>>({
      query: (data) => ({
        url: "/academics/lessons/",
        method: "POST",
        body: data,
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }),
    }),

    getCourses: build.query<Course[], void>({
      query: () => "/academics/courses/",
    }),
  }),
});

export const {
  useGetDisciplinesQuery,
  useCreateDisciplineMutation,
  useGetLessonsQuery,
  useCreateLessonMutation,
  useGetCoursesQuery,
} = academicsApi;
