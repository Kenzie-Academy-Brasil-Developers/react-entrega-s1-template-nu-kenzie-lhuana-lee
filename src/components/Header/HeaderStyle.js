import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 27px 20px;

  position: fixed;
  top: 0;
  right: 0;

  background: var(--white);

  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;

    button {
      padding: 8px 12px;

      font-size: var(--body-size);

      color: var(--black);
      background-color: var(--grey-2);

      &:hover {
        color: var(--white);
        background-color: var(--grey-3);

        transition: 1.3s;
      }
    }
  }

  @media (min-width: 431px) {
    div {
      width: 388px;
    }
  }

  @media (min-width: 768px) {
    padding: 27px 0;
    div {
      width: 100%;

      justify-content: space-between;
      align-items: center;
    }

    button {
      margin-left: 593px;
    }
  }

  @media (min-width: 805px) {
    div {
      width: 805px;
    }

    button {
      margin-left: 629px;
    }
  }

  @media (min-width: 870px) {
    div {
      width: 795px;
    }

    button {
      margin-left: 662px;

      transition: 2s;
    }
  }
`;
