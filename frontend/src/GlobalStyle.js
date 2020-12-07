import {createGlobalStyle} from "styled-components";
import backgroundImage from './assets/background-image.jpg';

export default createGlobalStyle`
  :root {
   --size-xxs: 2px;
   --size-xs: 4px;
   --size-s: 8px;
   --size-m: 12px;
   --size-l: 16px;
   --size-xl: 24px;
   --size-xxl: 32px;
  }

  * {
  box-sizing: border-box;
  }
  
  html, body {
  margin: 0;
  font-family: 'Comfortaa', sans-serif;
  color: #0B132B;
  }
  
  body {
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  }
`