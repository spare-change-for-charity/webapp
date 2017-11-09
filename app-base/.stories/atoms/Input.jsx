import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from '/client/atoms/Input';

storiesOf('atoms/Input', module)
  .add('basic', () => (
    <Input />
  ));
