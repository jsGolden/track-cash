import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface SpinnerContainerProps {
  readonly size: number;
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  border: 3px solid var(--light);
  border-bottom: 3px solid transparent;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  -webkit-animation: ${spinAnimation} 0.8s linear infinite;
  animation: ${spinAnimation} 0.8s linear infinite;
`;
