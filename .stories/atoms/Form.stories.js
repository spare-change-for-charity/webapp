import React from 'react';

import {storiesOf} from '@storybook/react';

import Button from '/client/atoms/Button';
import Form from '/client/atoms/Form';
import Input from '/client/atoms/Input';

storiesOf('atoms/Form', module)
  .add('default', () => (
    <Form onSubmit={console.log}>
      <Input label='Name' name='name' />
      <Button text='submit' />
    </Form>
  ))
;
