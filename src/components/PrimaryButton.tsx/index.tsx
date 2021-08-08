import { ButtonHTMLAttributes } from 'react';

import { Spinner } from '../Spinner';

import { Button } from './styles';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean | undefined;
  text: string;
}

export function PrimaryButton({
  isLoading = false,
  text,
  type = 'button',
  ...rest
}: PrimaryButtonProps): JSX.Element {
  return (
    <Button type={type} {...rest} disabled={isLoading}>
      {isLoading ? <Spinner /> : text}
    </Button>
  );
}
