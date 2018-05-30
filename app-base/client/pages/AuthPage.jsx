import React from 'react';

import {Checkbox, Form, Input} from '/client/atoms';

const AuthPage = () => (
  <React.Fragment>
    <Form onSubmit={console.log}>
      <Checkbox name='subscribe' label='Subscribe' />
      <Input name='username' />
      <Input name='password' type='password' />
      <button type='submit'>
        Log In
      </button>
    </Form>
    Auth Page
  </React.Fragment>
);

AuthPage.displayName = 'AuthPage';

export default AuthPage;
