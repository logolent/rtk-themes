import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { setThemeBackground, theme } from "../../../redux/features/theme";
import ThemeSectionContainer from "../container";

import "./index.scss";

const ThemeBackground: React.VFC = () => {
  const { themeBackground, isDarkMode } = useAppSelector(theme);
  const displatch = useAppDispatch();

  const handleSelectBackground = (value: string) => {
    return () => {
      if (isDarkMode && value === "color") return;
      const action = setThemeBackground(value);
      displatch(action);
    };
  };

  return (
    <ThemeSectionContainer sectionTitle={"Цвет фона: " + themeBackground}>
      <div className="theme-section--background">
        {/* neutral */}
        <div
          className={`background background--neutral ${
            themeBackground === "neutral" ? "background--selected" : ""
          }`}
          onClick={handleSelectBackground("neutral")}
        ></div>
        {/* color */}
        <div
          className={`background background--color ${
            themeBackground === "color" ? "background--selected" : ""
          }`}
          onClick={handleSelectBackground("color")}
        ></div>
      </div>
    </ThemeSectionContainer>
  );
};

export default ThemeBackground;
