import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import {css, withStyles} from '/client/styles/withStyles';

const Column = ({children, hCentering, landscape, offset, size, styles, stylesExtra}) => {
  const cssBase = [
    styles.column,
    styles[`columnPercent${size}`],
    styles[`columnOffset${offset}`],
    landscape && styles[`columnPercentLandscape${landscape.size}`],
    landscape && styles[`columnPercentLandscape${landscape.offset}`],
    hCentering && styles.hCentering,
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

Column.displayName = 'Column';

const sizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 25, 75];
Column.sizes = [...sizes, 33, 67];

Column.propTypes = propTypesHandler({
  children: PropTypes.node,
  hCentering: PropTypes.bool,
  landscape: PropTypes.shape({
    offset: PropTypes.oneOf(Column.sizes),
    size: PropTypes.oneOf(Column.sizes),
  }),
  offset: PropTypes.oneOf(Column.sizes),
  size: PropTypes.oneOf(Column.sizes),
  stylesExtra: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
}, true);

Column.defaultProps = {
  children: null,
  hCentering: false,
  landscape: null,
  offset: null,
  size: null,
  stylesExtra: {},
};

export default withStyles(({breakpoints, units}) => ({
  column: {
    display: 'block',
    flex: '1 1 auto',
    maxWidth: '100%',
    width: '100%',
    marginLeft: 0,
  },

  hCentering: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  ...sizes.reduce((object, size) => ({
    ...object,
    [`columnOffset${size}`]: {
      marginLeft: `${size}%`,
    },
    [`columnPercent${size}`]: {
      flex: `0 0 ${size}%`,
      maxWidth: `${size}%`,
    },
    [`columnOffsetLandscape${size}`]: {
      [breakpoints.landscape]: {
        marginLeft: `${size}%`,
      },
    },
    [`columnPercentLandscape${size}`]: {
      [breakpoints.landscape]: {
        flex: `0 0 ${size}%`,
        maxWidth: `${size}%`,
      },
    },
  }), {
    columnOffset33: {
      marginLeft: '33.3333%',
    },
    columnPercent33: {
      flex: '0 0 33.3333%',
      maxWidth: '33.3333%',
    },
    columnOffsetLandscape33: {
      [breakpoints.landscape]: {
        marginLeft: '33.3333%',
      },
    },
    columnPercentLandscape33: {
      [breakpoints.landscape]: {
        flex: '0 0 33.3333%',
        maxWidth: '33.3333%',
      },
    },
    columnOffset66: {
      marginLeft: '66.6667%',
    },
    columnPercent66: {
      flex: '0 0 66.6667%',
      maxWidth: '66.6667%',
    },
    columnOffsetLandscape66: {
      [breakpoints.landscape]: {
        marginLeft: '66.6667%',
      },
    },
    columnPercentLandscape66: {
      [breakpoints.landscape]: {
        flex: '0 0 66.6667%',
        maxWidth: '66.6667%',
      },
    },
  }),
}))(Column);
