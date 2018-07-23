import React from 'react';

import {storiesOf} from '@storybook/react';

import Image from '/client/atoms/Image';

const smallImageUrl = 'http://www.placepuppy.net/400/250';
const largeImageUrl = 'http://www.placepuppy.net/800/1050'

storiesOf('atoms/Image', module)
  .add('small', () => (
    <Image url={smallImageUrl} />
  ))
  .add('large', () => (
    <Image url={largeImageUrl} />
  ))
;
