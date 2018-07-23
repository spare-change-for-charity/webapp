import React from 'react';

import {storiesOf} from '@storybook/react';

import Row from '/client/atoms/Row';

storiesOf('atoms/Column & Row/row only', module)
  .add('default', () => (
    <Row>
      row only
    </Row>
  ))
  .add('with passthrough style', () => (
    <Row style={{backgroundColor: 'lightgrey'}}>
      passthrough style
    </Row>
  ))
  .add('with passthrough className', () => (
    <Row className='aqua'>
      passthrough className (see inspector)
    </Row>
  ))
;
