import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  main {
    background: var(--light);
    flex: 8;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 2.4rem;
        font-weight: 500;
        color: var(--orange);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-top: 28px;
    }
  }

  aside {
    flex: 8;
    background: var(--orange);

    @media (max-width: 760px) {
      display: none;
    }
  }
`;
