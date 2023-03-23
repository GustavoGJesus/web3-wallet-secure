import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h1{
      color: var(--green);
  }
`;
