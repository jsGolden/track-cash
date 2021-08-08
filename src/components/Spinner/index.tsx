import { SpinnerContainer } from './styles';

interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 30 }: SpinnerProps): JSX.Element {
  return <SpinnerContainer size={size} />;
}
