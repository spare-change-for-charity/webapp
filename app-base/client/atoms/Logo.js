import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import {css, withStyles} from '/client/styles/withStyles';

const Logo = ({name, css, styles}) => (
  <svg {...css(styles.logo)}>
    <use xlinkHref={`/icons/logos.svg#${name}`} />
  </svg>
);

Logo.displayName = 'Logo';

Logo.propTypes = propTypesHandler({
  name: PropTypes.string.isRequired,
}, true);

Logo.defaultProps = {

};

export default withStyles(({colors}) => ({
  logo: {

  },
}))(Logo);
