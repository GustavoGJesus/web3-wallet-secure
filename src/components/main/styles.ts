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
      color: var(--white);
  }
`;

export const Button = styled.button`
  padding: 25px;
  cursor: pointer;
  outline: none;
  border: none;

  font-family: Fira Code;
  font-size: 15px;
  color: var(--black);

  background: var(--green);
  border-radius: 30px;
  font-weight: 600;
`;
