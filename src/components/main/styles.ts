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
  color: #487ae8;

  background: #203159;
  border-radius: 30px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 13px;
  border-radius: 10px;

  border: 1px solid var(--white);
  outline: none;

  background: transparent;
  color: var(--white);

  font-family: Fira Code;
`;

export const ContainerBalance = styled.div`
  width: 500px;
  height: 700px;

  align-items: center;
  justify-content: center;

  margin-top: 50px;

  display: flex;
  flex-direction: column;

  gap: 50px;
  padding: 20px;

  border-radius: 20px;
  background: transparent;

  border: 1px solid #D8D8D9;
`;

export const ContentBalance = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 20px;

    color: #d8d8d9;
  }

  h4{
    font-size: 40px;
  }
`;
