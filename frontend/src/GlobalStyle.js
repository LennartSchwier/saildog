import {createGlobalStyle} from "styled-components";
import backgroundImage from './assets/background-image.jpg';

export default createGlobalStyle`
  :root {
   
   --theme-darker: #0B132B;
   --theme-dark: #1C2541;
   --theme-mid: #3A506B;
   --theme-light: #5BC0BE;
   --theme-lighter: #6FFFE9;
  
   --size-xxs: 2px;
   --size-xs: 4px;
   --size-s: 8px;
   --size-m: 12px;
   --size-l: 16px;
   --size-xl: 24px;
   --size-xxl: 32px;
   
   --boxshadow: var(--size-xxs) var(--size-xxs) var(--size-s) grey;
  }

  * {
  box-sizing: border-box;
  }
  
  html, body {
  margin: 0;
  font-family: 'Comfortaa', sans-serif;
  color: var(--theme-darker);
  }
  
  body {
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  }
`