import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Logo = (props) => {
  const {name} = props;

  const {styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.logo);

  return (
    <svg {...css(styles.logo)}>
      <use xlinkHref={`/icons/logo.svg#${name}`} />
    </svg>
  );
};

Logo.displayName = 'Logo';

Logo.propTypes = propTypesHandler({
  name: PropTypes.string.isRequired,
}, true);

Logo.defaultProps = {

};

Logo.styles = ({colors}) => ({
  logo: {

  },
});

export default withStyles(Logo.styles)(Logo);
