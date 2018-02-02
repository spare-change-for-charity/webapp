import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import {css, withStyles} from '/client/styles/withStyles';

const Row = ({children, vCentering, styles}) => {
  return (
    <div {...css(styles.row, vCentering && styles.vCentering)}>
      {children}
    </div>
  );
};

Row.displayName = 'Row';

Row.propTypes = propTypesHandler({
  children: PropTypes.node.isRequired,
  vCentering: PropTypes.bool,
}, true);

Row.defaultProps = {
  vCentering: false,
};

export default withStyles(() => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 0,
  },

  vCentering: {
    alignItems: 'center',
  },
}))(Row);
