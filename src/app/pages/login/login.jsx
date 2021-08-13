import React from 'react';
import LoginForm from '../../components/login-form';

import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__inner">
        <LoginForm className="form--login" />
      </div>
    </div>
  );
};

export default Login;
