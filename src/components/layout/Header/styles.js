import styled from 'styled-components';
import { colors } from 'styles';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #333;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitles = styled.div`
  h1 {
    font-size: 21px;
    color: ${colors.firstColor};
  }
`;

export const HeaderNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  li {
    cursor: pointer;
  }
`;
