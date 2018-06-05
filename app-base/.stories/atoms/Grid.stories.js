import React from 'react';

import {storiesOf} from '@storybook/react';

import Grid from '/client/atoms/Grid';

const A_CODE = 65;
const numbers = Array.from(Array(8)).map((_, number) => ({number}));
const Letter = ({number}) => (<div>{String.fromCharCode(A_CODE + number)}</div>);
const End = () => (<div>End</div>);

storiesOf('atoms/Grid', module)
  .add('default', () => (
    <Grid
      columns={3}
      component={Letter}
      keyProp='number'
      propItems={numbers}
    />
  ))
  .add('with End', () => (
    <Grid
      columns={3}
      component={Letter}
      keyProp='number'
      propItems={numbers}
      end={End}
    />
  ))
  .add('with End on new row', () => (
    <Grid
      columns={4}
      component={Letter}
      keyProp='number'
      propItems={numbers}
      end={End}
    />
  ))
  .add('with constantProps', () => (
    <Grid
      columns={3}
      component={Letter}
      keyProp='number'
      propItems={numbers}
      constantProps={{number: 0}}
    />
  ))
;
