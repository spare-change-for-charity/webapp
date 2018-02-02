import React from 'react';

import {storiesOf} from '@storybook/react';

import Checkbox from '/client/atoms/Checkbox';

storiesOf('atoms/Checkbox', module)
  .add('basic', () => (
    <Checkbox name="basic" label="basic" />
  ))
;
