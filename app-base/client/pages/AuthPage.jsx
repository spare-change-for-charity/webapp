import React from 'react';

import Form from '/client/atoms/Form';
import Checkbox from '/client/atoms/Checkbox';

const AuthPage = () => (
  <div>
    <Form onSubmit={console.log}>
      <Checkbox name='subscribe' label='Subscribe' />
      <input name='username' type='text' />
      <input name='password' type='password' />
      <button type='submit'>
        Log In
      </button>
    </Form>
    Auth Page
  </div>
);

AuthPage.displayName = 'AuthPage';

export default AuthPage;
