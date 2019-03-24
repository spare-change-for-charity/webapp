import { createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      // light: '#757ce8',
      main: theme.colors.blue,
      // dark: '#002884',
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: theme.colors.green,
      // dark: '#ba000d',
      // contrastText: '#000',
    },
  },
});

export default materialTheme;
