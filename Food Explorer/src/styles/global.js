import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size: 62.5%;
  }
  body{
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    --webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea{
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 100%;
  }
  a{
    text-decoration: none;
  }
  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover{
    filter: brightness(0.9);
  }
`;