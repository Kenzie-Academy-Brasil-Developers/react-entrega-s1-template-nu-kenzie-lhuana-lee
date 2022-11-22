import styled, { keyframes } from "styled-components";

export const animationCard = keyframes`
  from {
    transform: translateX(800px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const CardTransactionStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;

  overflow-y: auto;

  .card {
    width: 100%;

    padding: 13px;
    margin-top: 29px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    background-color: var(--grey-1);

    animation: ${animationCard} 1.5s;
  }

  .list {
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      font-size: var(--headline-size);
      font-weight: var(--title-weight-4);
      font-family: var(--font-family-default);

      color: var(--grey-4);
    }
  }

  .valueTrash {
    width: 45%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    button {
      padding: 3px 7px;

      border: 1px solid transparent;
      border-radius: 3px;

      svg {
        width: 12px;
        height: 12px;
      }
    }

    &:hover {
      button {
        background-color: var(--grey-3);

        transition: 1.3s;
      }

      svg {
        color: var(--white);

        transition: 1.5s;
      }
    }
  }

  span {
    font-size: var(--body-size);
    font-weight: var(--body-weight);

    color: var(--grey-3);
  }

  @media (min-width: 400px) {
    width: 400px;

    .list {
      width: 100%;
    }

    .valueTrash {
      width: 32%;
      gap: 0px;

      transition: 2s;
    }
  }

  @media (min-width: 435px) {
    width: 400px;

    .list {
      width: 100%;
    }

    .valueTrash {
      width: 32%;
      gap: 0px;
    }
  }

  @media (min-width: 768px) {
    width: 455px;

    .list {
      width: 100%;
    }

    .valueTrash {
      width: 32%;
      gap: 0px;
    }
  }
`;
