import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .carousel .slide img {
    width: auto;
  }
`;