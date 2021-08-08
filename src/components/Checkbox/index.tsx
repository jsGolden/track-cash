import { CheckboxContainer } from './styles';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ ...rest }: CheckboxProps): JSX.Element {
  return (
    <CheckboxContainer>
      Lembre-se
      <input type="checkbox" {...rest} />
      <span />
    </CheckboxContainer>
  );
}
