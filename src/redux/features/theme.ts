import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { THEME_BACKGROUND_KEY, THEME_COLOR_KEY } from "../../const/appThemes";
import { RootState } from "../../store";
import {
  getLocalDarkMode,
  getLocalThemeSetting,
  setLocalDarkMode,
  setLocalThemeSetting,
} from "../../utils/common";
import { ICurrentThemeState } from "../types";

const themeColor = getLocalThemeSetting(THEME_COLOR_KEY);
const themeBackground = getLocalThemeSetting(THEME_BACKGROUND_KEY);
const isDarkMode = getLocalDarkMode();

const initialState: ICurrentThemeState = {
  themeColor,
  themeBackground,
  isDarkMode
};

const usersSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeColor: (state, action: PayloadAction<string>) => {
      setLocalThemeSetting(THEME_COLOR_KEY, action.payload);
      state.themeColor = action.payload;
    },
    setThemeBackground: (state, action: PayloadAction<string>) => {
      setLocalThemeSetting(THEME_BACKGROUND_KEY, action.payload);
      state.themeBackground = action.payload;
    },
    toggleDarkMode: (state, _: PayloadAction<void>) => {
      const value = !current(state).isDarkMode;
      setLocalDarkMode(value);
      state.isDarkMode = value;
    },
  },
});

const { actions, reducer } = usersSlice;

export const { setThemeColor, setThemeBackground, toggleDarkMode } = actions;

export const theme = (state: RootState) => state.theme;

export default reducer;
