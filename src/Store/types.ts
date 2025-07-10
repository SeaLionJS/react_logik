export interface AuthLoginRequest {
  username: string;
  password: string;
}

export interface AuthLoginResponse {
  detail: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email?: string;
  role: "student" | "teacher" | "admin";
  teacher?: string | null;
  logics?: number;
  password_value?: string | null;
}

export interface Discipline {
  id: string;
  name: string;
  description?: string;
}

export interface Lesson {
  id: string;
  discipline: Discipline;
  discipline_id?: string;
  title: string;
  description?: string;
}

export interface Course {
  id: string;
  discipline: Discipline;
  discipline_id?: string;
  teacher: User;
  teacher_id?: string;
  title: string;
  start_date: string;
  is_deleted: boolean;
}

export interface Enrollment {
  id: string;
  course: Course;
  course_id?: string;
  student: User;
  student_id?: string;
}

export interface Grade {
  id: string;
  student: User;
  student_id?: string;
  lesson: Lesson;
  lesson_id?: string;
  course: Course;
  course_id?: string;
  homework: number;
  in_class: number;
  bonus: number;
  extra: number;
  total: number;
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
  is_active: boolean;
}

export interface ProjectInfo {
  project: string;
  version: string;
  description: string;
  author: string;
}
