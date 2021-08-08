import styled from 'styled-components';

interface ButtonProps {
  readonly isLoading?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--orange);
  color: var(--light);
  border: 0;
  cursor: pointer;
  transition: filter 0.4s;

  font-family: 'Ubuntu', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;

  padding: 1.4rem 0;
  border-radius: 4px;

  &:not(:disabled):hover {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.85;
    cursor: wait;
  }
`;
