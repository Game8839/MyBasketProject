import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/authcomponents/LoginForm';
import RegisterForm from '../components/authcomponents/RegisterForm';
import Header from '../components/headers/Header';

function RegisterPage() {
  const isLoginActivate = useSelector(({ auth: { login } }) => login);
  return (
    <>
      <Header />
      {isLoginActivate ? <LoginForm /> : <RegisterForm />}
    </>
  );
}

export default RegisterPage;
