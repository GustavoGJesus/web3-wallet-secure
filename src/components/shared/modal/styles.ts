// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../../styles/global";

export const Container = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--black-600);
  color: var(--white);
  font-weight: 600;
  justify-content: center;
  /* align-items: center; */
  width: 500px;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
`;