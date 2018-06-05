import React from 'react';

import {storiesOf} from '@storybook/react';

import Icon from '/client/atoms/Icon';

const mainStories = storiesOf('atoms/Icon/main', module);

Icon.usedIcons.main.forEach(name =>
  mainStories.add(name, () => (
    <Icon name={name} />
  ))
);

const externalStories = storiesOf('atoms/Icon/external', module);

Icon.usedIcons.main.forEach(name =>
  externalStories.add(name, () => (
    <Icon name={name} />
  ))
);
