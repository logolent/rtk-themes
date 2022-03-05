import React from 'react';
import Button from '../ui-kit/Button';
import TextInput from '../ui-kit/TextInput';

import './index.scss';

interface ITextInputFormProps {
  value: string;
  buttonText: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputForm: React.VFC<ITextInputFormProps> = ({
  value,
  buttonText,
  onSubmit,
  onChange,
}) => {
  return (
    <form className="text-input-form" onSubmit={onSubmit}>
      <TextInput 
        type="text"
        value={value}
        onChange={onChange}
      />
      <Button type="submit" buttonVariant="contained" buttonType="medium">
        {buttonText}
      </Button>
    </form>
  );
};

export default TextInputForm;
