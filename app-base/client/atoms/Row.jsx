import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Row = ({center, children, wrap, css, styles, stylesExtra}) => {
  const cssBase = [
    styles.row,
    center && center.h && styles.hCenter,
    center && center.v && styles.vCenter,
    wrap && styles.wrap,
  ];

  const cssWithExtras = stylesExtra.constructor === Object
    ? [...cssBase, stylesExtra]
    : [...cssBase, ...stylesExtra];

  return (
    <div {...css(cssWithExtras)}>
      {children}
    </div>
  );
};

Row.displayName = 'Row';

Row.propTypes = propTypesHandler({
  center: PropTypes.shape({
    h: PropTypes.bool,
    v: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  stylesExtra: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  wrap: PropTypes.bool,
}, true);

Row.defaultProps = {
  center: {
    h: false,
    v: false,
  },
  stylesExtra: {},
  wrap: false,
};

export default withStyles(({breakpoints, units}) => ({
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
}))(Row);
