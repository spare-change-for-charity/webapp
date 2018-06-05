import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const ContentWrapper = ({content, css, styles}) => {
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

ContentWrapper.styles = ({units}) => ({
  container: {
    position: 'relative',
    padding: `0 ${units(2)}`,
    maxWidth: units(112),
    width: '100%',
    margin: '0 auto',
  },
});

export default withStyles(ContentWrapper);
