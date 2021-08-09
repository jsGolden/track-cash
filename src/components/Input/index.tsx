import { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

import emailIcon from '../../assets/images/email.svg';
import passwordIcon from '../../assets/images/password.svg';

const icons = {
  email: emailIcon,
  password: passwordIcon,
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: 'email' | 'password';
  isError?: boolean;
}

export function Input({
  icon,
  isError = false,
  ...rest
}: InputProps): JSX.Element {
  return (
    <InputContainer isError={isError}>
      <input type="text" {...rest} />
      <img src={icons[icon]} alt="ícone" />
    </InputContainer>
  );
}
