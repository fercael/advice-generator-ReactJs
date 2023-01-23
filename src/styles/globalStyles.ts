import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  html{
    width: 100vw;
    min-height: 100vh;
    
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    background: var(--darkest-blue);

    padding: 2rem;

    @media(max-width: 768px){
      font-size: 14px;
    }
  }

  :root{
    --darkest-blue: #2E3238;
    --light-gray: #F1F2F4;
    --gray: #C7CBD1;
    
    --blue: #709BDB;
    --light-blue: #C2D4F0;
  }
`;