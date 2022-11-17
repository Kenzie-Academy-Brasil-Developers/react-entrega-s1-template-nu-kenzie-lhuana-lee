import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;

  padding: 15px 20px;

  position: fixed;
  top: 0;
  right: 0;

  background: var(--white);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  div {
    width: 100%;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    button {
      padding: 8px 12px;

      font-size: var(--body-size);

      color: var(--black);
      background-color: var(--grey-2);
    }
  }

  @media (min-width: 431px) {
    div {
      width: 388px;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 753px;
    }
  }
`;
