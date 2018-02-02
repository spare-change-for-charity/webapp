import React from 'react';

import {storiesOf} from '@storybook/react';

import {Column, Row} from '/client/atoms';

const oneColumnStories = storiesOf('atoms/Column & Row/1 column', module)
  .add('with style as object', () => (
    <Row>
      <Column stylesExtra={{backgroundColor: 'lightgrey'}}>
        Some text
      </Column>
    </Row>
  ))
  .add('with style as array', () => (
    <Row>
      <Column stylesExtra={[{backgroundColor: 'aqua'}]}>
        Some text
      </Column>
    </Row>
  ))
  .add('with centered children', () => (
    <Row>
      <Column hCentering={true}>
        Some text
      </Column>
    </Row>
  ))
;

Column.sizes.forEach(size =>
  oneColumnStories.add(`offset at ${size}%`, () => (
    <Row>
      <Column offset={size} stylesExtra={{backgroundColor: 'lightgrey'}}>
        Offset by {size}%
      </Column>
    </Row>
  ))
);

const twoColumnStories = storiesOf('atoms/Column & Row/2 column', module)
  .add('2 column, no settings', () => (
    <Row>
      <Column>
        Some text
      </Column>
      <Column>
        Some text
      </Column>
    </Row>
  ))
;

Column.sizes.forEach(size =>
  twoColumnStories.add(`1st at ${size}%`, () => (
    <Row>
      <Column size={size} stylesExtra={{backgroundColor: 'lightgrey'}}>
        {size}%
      </Column>
      <Column stylesExtra={{backgroundColor: 'aqua'}}>
        Some text
      </Column>
    </Row>
  ))
);

const orientationStories = storiesOf('atoms/Column & Row/orientation', module);

Column.sizes.forEach(size =>
  orientationStories.add(`portrait: ${size}%, landscape: ${100 - size}%`, () => (
    <Row>
      <Column size={size} landscape={{size: 100 - size}} stylesExtra={{backgroundColor: 'lightgrey'}}>
        {size}% : {100 - size}%
      </Column>
    </Row>
  ))
);
