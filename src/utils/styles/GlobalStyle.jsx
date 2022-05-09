import { createGlobalStyle } from "styled-components";
import variables from "../variables";

const StyledGlobalStyle = createGlobalStyle`
    * {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }
 
    body {
    margin:0;
    }
    
    .container {
    margin: 0 20px;
    min-height: calc(100vh - ${variables.height.footer}px - ${variables.height.headerSmall}px);
  
      @media (min-width: 1024px) {
      margin: 0 100px;
      min-height: calc(100vh - ${variables.height.footer}px - ${variables.height.headerLarge}px);
      }
    }
`;

const GlobalStyle = () => <StyledGlobalStyle />;

export default GlobalStyle;
