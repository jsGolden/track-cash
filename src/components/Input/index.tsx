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
}

export function Input({ icon, ...rest }: InputProps): JSX.Element {
  return (
    <InputContainer>
      <input type="text" {...rest} />
      <img src={icons[icon]} alt="ícone" />
    </InputContainer>
  );
}
