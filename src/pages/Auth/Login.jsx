import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from 'store/actions/authActions';

import { Message, Spinner } from 'components/shared';
import { Auth } from 'styles/components';
import { LockOpenIcon } from 'components/icons';

import { useToasts } from 'react-toast-notifications';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { addToast } = useToasts();

  const dispatch = useDispatch();

  const authLogin = useSelector((state) => state.authLogin);
  const { error, isAuth, loading } = authLogin;

  useEffect(() => {
    if (isAuth) {
      addToast('Login Successfully', {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
      history.push('/');
    }
    // eslint-disable-next-line
  }, [isAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Auth>
      <h1>
        <LockOpenIcon /> Login
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <Message type='error' text={error} />}

        {loading ? (
          <Spinner />
        ) : (
          <input type='submit' value='Login' className='btn' />
        )}
      </form>

      <p>
        Don't have an account? <Link to='/auth/register'>Register</Link>
      </p>
    </Auth>
  );
};

export default Login;
