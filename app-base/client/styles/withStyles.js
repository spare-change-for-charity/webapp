import {css, withStyles, ThemeProvider} from 'react-with-styles';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite/no-important';

import theme from './theme';

ThemedStyleSheet.registerDefaultTheme(theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export {
  css,
  withStyles,
  ThemeProvider,
  ThemedStyleSheet,
};
