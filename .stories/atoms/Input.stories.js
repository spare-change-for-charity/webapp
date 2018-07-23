import React from 'react';

import {storiesOf} from '@storybook/react';

import Input from '/client/atoms/Input';

const onChange = (value, InputComponent) => {
  console.log(value);
  InputComponent.setState({value});
};

storiesOf('atoms/Input', module)
  .add('default', () => (
    <Input label='Default' name='default' />
  ))
  .add('with onChange', () => (
    <Input label='onChange' name='onChange' onChange={onChange} />
  ))
;
