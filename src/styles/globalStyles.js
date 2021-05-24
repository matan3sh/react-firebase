import { createGlobalStyle } from 'styled-components';
import { root, colors } from 'styles';

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  position: relative;
  font-family: ${root.font};
  font-size: ${root.normalFontSize};
  transition: 0.5s;
  background-color: ${colors.backgroundColor};
  margin:  0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
export default GlobalStyle;
