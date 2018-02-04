import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import {css, withStyles} from '/client/styles/withStyles';

const Row = ({children, hCenter, vCenter, wrap, styles}) => {
 return (
   <div {...css(styles.row, hCenter && styles.hCenter, vCenter && styles.vCenter, wrap && styles.wrap)}>
     {children}
   </div>
 );
};

Row.displayName = 'Row';

Row.propTypes = propTypesHandler({
 children: PropTypes.node.isRequired,
 hCenter: PropTypes.bool,
 vCenter: PropTypes.bool,
 wrap: PropTypes.bool,
}, true);

Row.defaultProps = {
  hCenter: false,
  vCenter: false,
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
   justifyContent: 'space-evenly',
 },

 vCenter: {
   alignItems: 'center',
 },
}))(Row);
