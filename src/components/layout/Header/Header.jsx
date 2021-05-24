import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, HeaderNav, HeaderTitles } from './styles';

const Header = ({ user, onLogout }) => {
  return (
    <HeaderContainer>
      <HeaderTitles>
        <h1>Firebase Auth</h1>
      </HeaderTitles>
      <HeaderNav>
        <ul>
          {user && <li onClick={() => onLogout()}>Logout</li>}
          {!user && (
            <Link to='/auth/login'>
              <li>Login</li>
            </Link>
          )}
        </ul>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
