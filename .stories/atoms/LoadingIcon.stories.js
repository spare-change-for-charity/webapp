import React from 'react';

import {storiesOf} from '@storybook/react';

import LoadingIcon from '/client/atoms/LoadingIcon';

storiesOf('atoms/LoadingIcon', module)
  .add('default', () => (
    <LoadingIcon />
  ))
;
