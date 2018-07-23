import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const LoadingIcon = (props) => {
  const {styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.loadingIcon);

  return (
    <div {...combinedStyles}>
      Loading...
    </div>
  );
};

LoadingIcon.displayName = 'LoadingIcon';

LoadingIcon.propTypes = propTypesHandler({
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

LoadingIcon.defaultProps = {
  className: '',
  style: {},
};

LoadingIcon.styles = () => ({
  loadingIcon: {

  },
});

export default withStyles(LoadingIcon);
