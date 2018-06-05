import React from 'react';

import {storiesOf} from '@storybook/react';

import Button from '/client/atoms/Button';

const onClick = () => console.log('clicked');

storiesOf('atoms/Button', module)
  .add('default', () => (
    <Button text='default' />
  ))
  .add('with onClick', () => (
    <Button text='onClick' onClick={onClick} />
  ))
;
