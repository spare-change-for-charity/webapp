import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import {css, withStyles} from '/client/styles/withStyles';

const Column = ({center, children, landscape, offset, size, styles, stylesExtra}) => {
  const cssBase = [
    styles.column,
    styles[`columnPercent${size}`],
    styles[`columnOffset${offset}`],
    landscape && styles[`columnPercentLandscape${landscape.size}`],
    landscape && styles[`columnPercentLandscape${landscape.offset}`],
    center && center.h && styles.hCenter,
    center && center.v && styles.vCenter,
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

const simpleSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 25, 75];
Column.sizes = [...simpleSizes, 33, 67]

Column.propTypes = propTypesHandler({
  center: PropTypes.shape({
    h: PropTypes.bool,
    v: PropTypes.bool,
  }),
  children: PropTypes.node,
  landscape: PropTypes.shape({
    offset: PropTypes.oneOf(Column.sizes),
    size: PropTypes.oneOf(Column.sizes),
  }),
  offset: PropTypes.oneOf(Column.sizes),
  size: PropTypes.oneOf(Column.sizes),
  stylesExtra: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
}, true);

Column.defaultProps = {
  center: {
    h: false,
    v: false,
  },
  children: null,
  landscape: null,
  offset: null,
  size: null,
  stylesExtra: {},
};

const sizeMap = simpleSizes.reduce((object, size) => ({...object, [size]: size}), {33: 33.3333, 67: 66.6667});

export default withStyles(({breakpoints}) => ({
  column: {
    display: 'block',
    flex: '1 1 auto',
    maxWidth: '100%',
    width: '100%',
    marginLeft: 0,
  },

  hCenter: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  vCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  ...Column.sizes.reduce((object, size) => ({
    ...object,
    [`columnOffset${size}`]: {
      marginLeft: `${sizeMap[size]}%`,
    },
    [`columnPercent${size}`]: {
      flex: `0 0 ${sizeMap[size]}%`,
      maxWidth: `${sizeMap[size]}%`,
    },
    [`columnOffsetLandscape${size}`]: {
      [breakpoints.landscape]: {
        marginLeft: `${sizeMap[size]}%`,
      },
    },
    [`columnPercentLandscape${size}`]: {
      [breakpoints.landscape]: {
        flex: `0 0 ${sizeMap[size]}%`,
        maxWidth: `${sizeMap[size]}%`,
      },
    },
  }), {}),
}))(Column);
