import React from 'react';

import {storiesOf} from '@storybook/react';

import Button from '/client/atoms/Button';

storiesOf('atoms/Button', module)
  .add('default', () => (
    <Button />
  ))
;
