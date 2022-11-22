import styled from "styled-components";

export const DashboardStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;

  font-family: "Inter";

  @media (min-width: 768px) {
    margin: 0 auto;

    gap: 20px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
