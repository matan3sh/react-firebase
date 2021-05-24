import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/actions/authActions';

const Home = () => {
  const dispatch = useDispatch();

  const authLogin = useSelector((state) => state.authLogin);
  const { isAuth } = authLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>I am Home Page</h2>
      {isAuth && <small onClick={handleLogout}>Logout</small>}
    </div>
  );
};

export default Home;
