import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import logger from '/lib/logger';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) { // eslint-disable-line class-methods-use-this
    logger.error(error);
    logger.error(info);
  }

  render() {
    return this.props.children;
  }
}

ErrorBoundary.displayName = 'ErrorBoundary';

ErrorBoundary.propTypes = propTypesHandler({
  children: PropTypes.node.isRequired,
});

export default ErrorBoundary;
