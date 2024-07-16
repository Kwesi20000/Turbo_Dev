import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  if (userInfo) {
    history.push('/');
  }

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegisterScreen;