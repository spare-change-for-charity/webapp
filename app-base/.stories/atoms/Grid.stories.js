import React from 'react';

import {storiesOf} from '@storybook/react';

import Grid from '/client/atoms/Grid';

storiesOf('atoms/Grid', module)
  .add('default', () => (
    <Grid />
  ))
;
