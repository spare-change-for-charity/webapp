import React from 'react';

import {Button, Checkbox, Form, Input, Row} from '/client/atoms';

const login = (formData) => {
  return formData;
};

const AuthPage = () => (
  <React.Fragment>
    <Form onSubmit={login}>
      <Row>
        <Input label='Username' name='username' />
      </Row>
      <Row>
        <Input label='Password' name='password' type='password' />
      </Row>
      <Row>
        <Checkbox checked={true} label='Subscribe' name='subscribed' />
      </Row>
      <Row>
        <Button text='Login' />
      </Row>
    </Form>
  </React.Fragment>
);

AuthPage.displayName = 'AuthPage';

export default AuthPage;
