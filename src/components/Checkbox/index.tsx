import { CheckboxContainer } from './styles';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(): JSX.Element {
  return (
    <CheckboxContainer>
      Lembre-se
      <input type="checkbox" />
      <span />
    </CheckboxContainer>
  );
}
