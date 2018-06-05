import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Row = (props) => {
  const {center, wrap} = props;

  const {styles} = props;
  const combinedStyles = getCombinedStyles(
    props,
    styles.row,
    center && center.h && styles.hCenter,
    center && center.v && styles.vCenter,
    wrap && styles.wrap,
  );

  return (
    <div {...combinedStyles}>
      {props.children}
    </div>
  );
};

Row.displayName = 'Row';

Row.propTypes = propTypesHandler({
  children: PropTypes.node.isRequired,
  center: PropTypes.shape({
    h: PropTypes.bool,
    v: PropTypes.bool,
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  wrap: PropTypes.bool,
}, true);

Row.defaultProps = {
  center: {
    h: false,
    v: false,
  },
  className: '',
  style: {},
  wrap: false,
};

Row.styles = ({breakpoints, units}) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  wrap: {
    flexWrap: 'wrap',

    '@media (orientation: landscape)': {
      flexWrap: 'nowrap',
    },
  },

  hCenter: {
    justifyContent: 'space-around',
  },

  vCenter: {
    alignItems: 'center',
  },
});

export default withStyles(Row);
