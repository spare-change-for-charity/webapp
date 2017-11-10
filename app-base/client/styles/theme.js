const theme = {
  breakpoints: {
    small: '@media (max-width: 479px)',
    notSmall: '@media (min-width: 480px)',
    medium: '@media (max-width: 1047px)',
    large: '@media (min-width: 1048px)',
  },
  colors: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  fonts: {},
  units: size => `${size}rem`,
};

export default theme;
