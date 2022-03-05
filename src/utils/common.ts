import { THEME_DARK_KEY } from "../const/appThemes";

export const getLocalThemeSetting = (setting: string) => {
  const rootElement = document.getElementById("root");
  const localStorageThemeColor = localStorage.getItem(setting) || "";
  return (
    localStorageThemeColor || rootElement?.getAttribute(`data-${setting}`) || ""
  );
};

export const setLocalThemeSetting = (setting: string, value: string) => {
  const rootElement = document.getElementById("root");
  rootElement?.setAttribute(`data-${setting}`, value);
  localStorage.setItem(setting, value);
};

export const getLocalDarkMode = () => {
  return localStorage.getItem(THEME_DARK_KEY) !== null;
};

export const setLocalDarkMode = (value: boolean) => {
  const rootElement = document.getElementById("root");
  const attribute = `data-${THEME_DARK_KEY}`;
  if (value) {
    rootElement?.setAttribute(attribute, "");
    localStorage.setItem(THEME_DARK_KEY, "");
  } else {
    rootElement?.removeAttribute(attribute);
    localStorage.removeItem(THEME_DARK_KEY);
  }
};
