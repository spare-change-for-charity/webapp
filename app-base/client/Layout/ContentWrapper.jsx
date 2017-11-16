import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import {css, withStyles} from '/client/styles/withStyles';

const ContentWrapper = ({content, styles}) => {
  return (
    <div {...css(styles.container)}>
      {content()}
    </div>
  );
};

ContentWrapper.displayName = 'ContentWrapper';

ContentWrapper.propTypes = propTypesHandler({
  content: PropTypes.func.isRequired,
}, true);

export default withStyles(({units}) => ({
  container: {
    position: 'relative',
    padding: `0 ${units(2)}`,
    maxWidth: units(112),
    width: '100%',
    margin: '0 auto',
  },
}))(ContentWrapper);
