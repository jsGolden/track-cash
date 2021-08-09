import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.png';

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

      .form--inputs {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
      }

      .form--error {
        color: var(--error);
        font-size: 1.4rem;
        margin-top: -2rem;
        font-weight: 500;
      }

      .form--misc {
        display: flex;
        justify-content: space-between;

        .misc--links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          a {
            color: var(--orange);
            text-decoration: none;
            font-weight: 500;
          }
        }
      }
    }
  }

  aside {
    position: relative;
    flex: 8;

    background-image: url('${backgroundImg}');
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--orange);
      opacity: 0.85;
    }

    .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      color: var(--light);

      h2 {
        font-size: 4.8rem;
        font-weight: 700;
        text-align: center;
        line-height: 6rem;
      }

      p {
        width: 90%;
        max-width: 500px;
        font-size: 1.8rem;
        line-height: 2.1rem;
        text-align: justify;
      }
    }

    @media (max-width: 860px) {
      display: none;
    }
  }
`;
