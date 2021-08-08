import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 28px;
  color: var(--orange);

  input[type='checkbox'] {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid var(--orange);

    transition: all ease 0.3s;
  }

  input[type='checkbox']:checked ~ span {
    background-color: var(--orange);

    &::after {
      position: absolute;
      content: '';

      left: 4px;
      top: 0px;
      width: 6px;
      height: 10px;
      border: solid white;
      border-width: 0px 2px 2px 0px;
      border-radius: 1px;

      transform: rotate(45deg);
    }
  }
`;
