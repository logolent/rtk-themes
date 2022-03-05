import { ThemeSection } from "../../components/ThemeSection";
import { AppThemes } from "../../const/appThemes";

import "./index.scss";

const ThemesContainer: React.VFC = () => {
  return (
    <div className="themes-container">
      <ThemeSection.Colors themes={AppThemes} />
      <ThemeSection.Background />
      <ThemeSection.DarkModeSwitch />
    </div>
  );
};

export default ThemesContainer;
