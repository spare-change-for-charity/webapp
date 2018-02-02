import initStoryshots from '@storybook/addon-storyshots';
import {StyleSheetTestUtils} from 'aphrodite';

jest.mock('../client/lib/randomId', () =>
  string => `${string}-random`
);

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

initStoryshots();
