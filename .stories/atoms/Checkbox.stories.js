import React from 'react';

import {storiesOf} from '@storybook/react';

import Checkbox from '/client/atoms/Checkbox';

const onChange = (checked, CheckboxComponent) => {
  console.log(checked);
  CheckboxComponent.setState({checked});
};

storiesOf('atoms/Checkbox', module)
  .add('default', () => (
    <Checkbox name='check' label='check' value='check' />
  ))
  .add('with onChange', () => (
    <Checkbox name='check' label='check' value='check' onChange={onChange} />
  ))
;
