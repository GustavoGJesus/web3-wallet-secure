import { css } from '@emotion/react';

export const MediaQuerys = {
  sm: "@media (max-width: 768px)",
  md: "@media (max-width: 1024px)"
}

export const GlobalStyles = css`
  :root {
    --white: #ffffff;
    --black: #000000;

    --green: #50ff8c;
    --red: #cb3837;
  }

  *,
  *::before,
  *::after{
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  body{
    font-family: "Fira Code", sans-serif;
    background: var(--black);

    color: var(--white);
  }
`;