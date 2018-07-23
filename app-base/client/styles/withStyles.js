import {StyleSheet as oldStyleSheet, flushToStyleTag} from 'aphrodite/no-important';
import {withStyles, ThemeProvider} from 'react-with-styles';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterfaceFactory from 'react-with-styles-interface-aphrodite/lib/aphroditeInterfaceFactory';

import theme from './theme';

const descendantExtension = {
  selectorHandler(selector, baseSelector, generateSubtreeStyles) {
    if (selector[0] !== '^') {
      return null;
    }
    return generateSubtreeStyles(`${baseSelector} ${selector.slice(1)}`);
  },
};

const {StyleSheet, css} = oldStyleSheet.extend([descendantExtension]);
const aphroditeInterface = aphroditeInterfaceFactory({StyleSheet, css, flushToStyleTag});

ThemedStyleSheet.registerTheme(theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export {
  ThemeProvider,
  ThemedStyleSheet,
};

const simpleWithStyles = Component => withStyles(Component.styles)(Component);

export default simpleWithStyles;
