// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../../styles/global";

export const Container = styled.div`
  z-index: 9999;
  width: 100%;
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
  background: #0e111c;
  color: var(--white);
  font-weight: 600;
  justify-content: center;
  align-items: left;
  width: 500px;
  height: auto;
  padding: 20px;
  border-radius: 1rem;
`;