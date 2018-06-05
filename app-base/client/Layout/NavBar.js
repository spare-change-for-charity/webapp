import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const NavBar = ({css, styles}) => {
  return (
    <nav>
      NavBar
    </nav>
  );
};

NavBar.displayName = 'NavBar';

NavBar.propTypes = propTypesHandler({

}, true);

NavBar.defaultProps = {

};

NavBar.styles = ({breakpoints, colors, units}) => ({

});

export default withStyles(NavBar);
