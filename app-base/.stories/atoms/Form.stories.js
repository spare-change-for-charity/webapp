import React from 'react';

import {storiesOf} from '@storybook/react';

import Form from '/client/atoms/Form';

storiesOf('atoms/Form', module)
  .add('default', () => (
    <Form />
  ))
;
