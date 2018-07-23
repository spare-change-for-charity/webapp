import React from 'react';

import {storiesOf} from '@storybook/react';

import Logo from '/client/atoms/Logo';

storiesOf('atoms/Logo', module)
  .add('default', () => (
    <Logo name='square' />
  ))
;
