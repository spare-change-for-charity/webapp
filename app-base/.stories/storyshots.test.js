import 'raf/polyfill';
import initStoryshots from '@storybook/addon-storyshots';

jest.mock('../client/lib/randomId', () =>
  string => `${string}-random`
);

initStoryshots();
