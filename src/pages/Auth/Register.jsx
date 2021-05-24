import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { register, resetRegister } from 'store/actions/authActions';

import { Message, Spinner } from 'components/shared';
import { Auth } from 'styles/components';
import { AssignmentIcon } from 'components/icons';

import { useToasts } from 'react-toast-notifications';

const Register = ({ history }) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { addToast } = useToasts();

  const dispatch = useDispatch();

  const authRegister = useSelector((state) => state.authRegister);
  const { error, success, loading } = authRegister;

  useEffect(() => {
    if (success) {
      addToast('Registered Successfully', {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
      history.push('/auth/login');
      dispatch(resetRegister());
    }
    // eslint-disable-next-line
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userDetails));
    setUserDetails({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  return (
    <Auth>
      <h1>
        <AssignmentIcon /> Register
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={userDetails.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            name='email'
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={userDetails.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='passwordConfirm'>Confirm Password</label>
          <input
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            value={userDetails.passwordConfirm}
            onChange={handleChange}
          />
        </div>

        {error && <Message type='error' text={error} />}
        {loading ? (
          <Spinner />
        ) : (
          <input type='submit' value='Register' className='btn' />
        )}
      </form>

      <p>
        Already have an account? <Link to='/auth/login'>Login</Link>
      </p>
    </Auth>
  );
};

export default Register;
