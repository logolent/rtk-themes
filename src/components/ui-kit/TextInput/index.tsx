import "./index.scss";

const TextInput: React.VFC<React.HTMLProps<HTMLInputElement>> = ({
  ...props
}) => {
  return <input {...props} className="text-input" placeholder="..." />;
};

export default TextInput;
