import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Column = (props) => {
  const {center, landscape, offset, size} = props;

  const {styles} = props;
  const combinedStyles = getCombinedStyles(
    props,
    styles.column,
    styles[`columnPercent${size}`],
    styles[`columnOffset${offset}`],
    landscape && styles[`columnPercentLandscape${landscape.size}`],
    landscape && styles[`columnPercentLandscape${landscape.offset}`],
    center && center.h && styles.hCenter,
    center && center.v && styles.vCenter,
  );

  return (
    <div {...combinedStyles}>
      {props.children}
    </div>
  );
};

Column.displayName = 'Column';

const simpleSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 25, 75];
Column.sizes = [...simpleSizes, 33, 67]

Column.propTypes = propTypesHandler({
  children: PropTypes.node,
  center: PropTypes.shape({
    h: PropTypes.bool,
    v: PropTypes.bool,
  }),
  landscape: PropTypes.shape({
    offset: PropTypes.oneOf(Column.sizes),
    size: PropTypes.oneOf(Column.sizes),
  }),
  offset: PropTypes.oneOf(Column.sizes),
  size: PropTypes.oneOf(Column.sizes),
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

Column.defaultProps = {
  children: null,
  center: {
    h: false,
    v: false,
  },
  landscape: null,
  offset: null,
  size: null,
  className: '',
  style: {},
};

const sizeMap = simpleSizes.reduce((object, size) => ({...object, [size]: size}), {33: 33.3333, 67: 66.6667});

Column.styles = ({breakpoints}) => ({
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
});

export default withStyles(Column.styles)(Column);
