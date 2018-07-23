import React from 'react';

import propTypesHandler from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const NavBar = ({css, styles}) => {
  return (
    <nav {...css(styles.nav)}>
      NavBar
    </nav>
  );
};

NavBar.displayName = 'NavBar';

NavBar.propTypes = propTypesHandler({

}, true);

NavBar.defaultProps = {

};

NavBar.styles = () => ({
  nav: {

  },
});

export default withStyles(NavBar);
