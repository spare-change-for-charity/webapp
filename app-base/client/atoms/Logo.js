import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Logo = (props) => {
  const {name} = props;

  const {styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.logo);

  return (
    <svg {...combinedStyles}>
      <use xlinkHref={`/icons/logo.svg#${name}`} />
    </svg>
  );
};

Logo.displayName = 'Logo';

Logo.propTypes = propTypesHandler({
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

Logo.defaultProps = {
  className: '',
  style: {},
};

Logo.styles = () => ({
  logo: {

  },
});

export default withStyles(Logo);
