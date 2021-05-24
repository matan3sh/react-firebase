import styled from 'styled-components';
import { colors } from 'styles';

const Auth = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 30px;
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.08);

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    display: block;
    width: 100%;
    height: 40px;
    padding: 5px;
    font-size: 18px;
  }

  input[type='submit'] {
    margin-top: 20px;
    width: 100%;
    font-size: 17px;
  }

  div {
    margin-bottom: 20px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  svg {
    font-size: 28px;
  }

  a {
    color: ${colors.firstColor};
    font-weight: 700;
  }

  p {
    text-align: center;
    margin-top: 15px;
  }

  .btn {
    display: inline-block;
    background: ${colors.firstColor};
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export default Auth;
