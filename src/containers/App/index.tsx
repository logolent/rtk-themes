import { useLayoutEffect } from "react";
import {
  THEME_BACKGROUND_KEY,
  THEME_COLOR_KEY,
} from "../../const/appThemes";
import { useAppSelector } from "../../hooks/useRedux";
import { theme } from "../../redux/features/theme";
import { setLocalDarkMode, setLocalThemeSetting } from "../../utils/common";
import ThemesContainer from "../ThemesContainer";
import UsersContainer from "../UsersContainer";

import "./index.scss";

const App: React.VFC = () => {
  const { themeColor, themeBackground, isDarkMode } = useAppSelector(theme);

  useLayoutEffect(() => {
    setLocalThemeSetting(THEME_COLOR_KEY, themeColor);
    setLocalThemeSetting(THEME_BACKGROUND_KEY, themeBackground);
    setLocalDarkMode(isDarkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <div>
          <ThemesContainer />
        </div>
        <UsersContainer />
      </div>
    </div>
  );
};

export default App;
