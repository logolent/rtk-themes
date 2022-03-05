import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { setThemeColor, theme } from "../../../redux/features/theme";
import { ITheme } from "../../../types";
import ThemeSectionContainer from "../container";

import "./index.scss";

interface IThemeColorsProps {
  themes: ITheme[];
}

const ThemeColors: React.VFC<IThemeColorsProps> = ({ themes }) => {
  const { themeColor } = useAppSelector(theme);
  const displatch = useAppDispatch();

  const handleSelectTheme = (theme: string) => {
    return () => {
      const action = setThemeColor(theme);
      displatch(action);
    };
  };

  return (
    <ThemeSectionContainer sectionTitle={"Цвет темы: " + themeColor}>
      <div className="theme-section--colors">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className={`theme ${
              theme.name === themeColor ? "theme--selected" : ""
            }`}
            style={{ backgroundColor: theme.color }}
            onClick={handleSelectTheme(theme.name)}
          ></div>
        ))}
      </div>
    </ThemeSectionContainer>
  );
};

export default ThemeColors;
