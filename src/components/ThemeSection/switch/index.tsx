import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import {
  setThemeBackground,
  theme,
  toggleDarkMode,
} from "../../../redux/features/theme";
import ThemeSectionContainer from "../container";

import "./index.scss";

const ThemeSwitch: React.VFC = () => {
  const { isDarkMode } = useAppSelector(theme);
  const displatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    if (!isDarkMode) {
      displatch(setThemeBackground("neutral"));
    }

    displatch(toggleDarkMode());
  };

  return (
    <ThemeSectionContainer sectionTitle={"Темная тема: " + isDarkMode}>
      <div className="theme-section--switch">
        <input
          type="checkbox"
          name="dark-mode"
          checked={isDarkMode}
          onChange={handleToggleDarkMode}
        />
      </div>
    </ThemeSectionContainer>
  );
};

export default ThemeSwitch;
