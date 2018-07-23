import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import logger from '/lib/logger';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    const {fileName} = this.props;
    logger.error({fileName, error, info});
  }

  render() {
    return this.props.children;
  }
}

ErrorBoundary.displayName = 'ErrorBoundary';

ErrorBoundary.propTypes = propTypesHandler({
  children: PropTypes.node.isRequired,
  fileName: PropTypes.string.isRequired,
});

export default ErrorBoundary;
