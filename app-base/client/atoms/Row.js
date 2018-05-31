import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Row = ({children, center, wrap, className, style, css, styles}) => {
  const {className: innerClassName, style: innerStyle} = css(
    styles.row,
    center && center.h && styles.hCenter,
    center && center.v && styles.vCenter,
    wrap && styles.wrap,
  );

  const combinedClassName = `${className} ${innerClassName}`;
  const combinedStyle = {...innerStyle, ...style};

  return (
    <div className={combinedClassName} style={combinedStyle}>
      {children}
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
