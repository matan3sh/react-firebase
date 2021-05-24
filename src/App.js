import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser } from 'store/actions/authActions';

import { Login, Register, Home } from 'pages';
import { Spinner } from 'components/shared';
import { Container } from 'styles';

const App = () => {
  const dispatch = useDispatch();
  const authLogin = useSelector((state) => state.authLogin);
  const { isAuth, userAuth, error } = authLogin;

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logout());
  };

  if (!userAuth && !error) return <Spinner />;
  else
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/auth/login' component={Login} />
            <Route exact path='/auth/register' component={Register} />
          </Switch>
        </Container>
      </Router>
    );
};

export default App;
