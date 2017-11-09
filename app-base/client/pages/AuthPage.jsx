import React from 'react';

import Form from '/client/atoms/Form';
import Checkbox from '/client/atoms/Checkbox';

const AuthPage = () => (
  <div>
    <Form onSubmit={console.log}>
      <Checkbox />
      <input name="username" type="text" />
    </Form>
    Auth Page
  </div>
);

AuthPage.displayName = 'AuthPage';

export default AuthPage;
