import React from 'react';

import {storiesOf} from '@storybook/react';

import Image from '/client/atoms/Image';

storiesOf('atoms/Image', module)
  .add('default', () => (
    <Image />
  ))
;
