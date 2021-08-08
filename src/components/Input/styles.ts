import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background);
  border-radius: 4px;
  padding-right: 1.8rem;

  &:focus-within {
    border: 2px solid var(--orange);
  }

  input {
    outline: none;
    border: 0;
    background: transparent;
    width: 100%;
    padding: 1.45rem 0 1.45rem 1.5rem;
    color: var(--dark);

    &::placeholder {
      color: var(--gray);
    }
  }

  > img {
    width: 2.1rem;
    height: 2.1rem;
  }
`;
