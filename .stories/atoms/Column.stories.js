import React from 'react';

import {storiesOf} from '@storybook/react';

import {Column, Row} from '/client/atoms';

const oneColumnStories = storiesOf('atoms/Column & Row/1 column', module)
  .add('with passthrough style', () => (
    <Row>
      <Column style={{backgroundColor: 'lightgrey'}}>
        passthrough style
      </Column>
    </Row>
  ))
  .add('with passthrough className', () => (
    <Row>
      <Column className='aqua'>
        passthrough className (see inspector)
      </Column>
    </Row>
  ))
  .add('with centered children', () => (
    <Row>
      <Column center={{h: true}}>
        centered children
      </Column>
    </Row>
  ))
;

Column.sizes.forEach(size =>
  oneColumnStories.add(`offset at ${size}%`, () => (
    <Row>
      <Column offset={size} style={{backgroundColor: 'lightgrey'}}>
        offset by {size}%
      </Column>
    </Row>
  ))
);

const twoColumnStories = storiesOf('atoms/Column & Row/2 column', module)
  .add('2 column, no settings', () => (
    <Row>
      <Column>
        2 column
      </Column>
      <Column>
        no settings
      </Column>
    </Row>
  ))
;

Column.sizes.forEach(size =>
  twoColumnStories.add(`1st at ${size}%`, () => (
    <Row>
      <Column size={size} style={{backgroundColor: 'lightgrey'}}>
        1st at {size}%
      </Column>
      <Column style={{backgroundColor: 'aqua'}}>
        no size given
      </Column>
    </Row>
  ))
);

const orientationStories = storiesOf('atoms/Column & Row/orientation', module);

Column.sizes.forEach(size =>
  orientationStories.add(`portrait: ${size}%, landscape: ${100 - size}%`, () => (
    <Row>
      <Column size={size} landscape={{size: 100 - size}} style={{backgroundColor: 'lightgrey'}}>
        portrait - {size}% : landscape {100 - size}%
      </Column>
    </Row>
  ))
);
