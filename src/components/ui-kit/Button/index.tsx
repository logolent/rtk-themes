import "./index.scss";

type ButtonType = "small" | "medium" | "big";
type ButtonVariant = "contained" | "outlined";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  buttonVariant?: ButtonVariant;
}

const Button: React.FC<IButtonProps> = ({
  buttonType,
  buttonVariant,
  children,
  ...props
}) => {
  const type = buttonType || "medium";
  const variant = buttonVariant || "contained";

  const sizeClass = type.toString();
  const variantClass = variant.toString();

  return (
    <button
      className={`button button--${sizeClass} button--${variantClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
