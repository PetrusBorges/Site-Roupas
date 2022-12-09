import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oxanium', cursive;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.styled[50]};
  }

  button {
    cursor: pointer;
  }
`;