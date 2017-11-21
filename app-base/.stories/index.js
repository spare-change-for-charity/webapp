import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import '/client/styles/appwide.css';

const requireAll = (requireContext) => requireContext.keys().map(requireContext);

requireAll(require.context('../.stories/atoms', true, /\.jsx$/));
