import "./index.scss";

interface IThemeSectionContainerProps {
  sectionTitle: string;
}

const ThemeSectionContainer: React.FC<IThemeSectionContainerProps> = ({
  sectionTitle,
  children,
}) => {
  return (
    <div className="theme-section-container">
      <span className="theme-section-container__title">{sectionTitle}</span>
      <div className="theme-section-container__content">{children}</div>
    </div>
  );
};

export default ThemeSectionContainer;
