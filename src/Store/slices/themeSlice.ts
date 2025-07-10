// themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "light" | "dark" | "purple";

interface ThemeState {
  themeName: ThemeType;
}

const initialTheme = (): ThemeType => {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark" || saved === "purple") {
    return saved;
  }
  return "light";
};

const initialState: ThemeState = {
  themeName: initialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.themeName = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
