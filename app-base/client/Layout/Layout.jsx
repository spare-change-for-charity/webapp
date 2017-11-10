import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import React from 'react';

import logger from '/lib/logger';

import context from './context';

import ContentWrapper from './ContentWrapper';

class Layout extends React.Component {
  static childContextTypes = {
    context: PropTypes.object,
  }

  getChildContext() {
    return {
      context,
    };
  }

  componentDidCatch(error, info) {
    logger.error(error);
    logger.error(info);
  }

  render() {
    const {content} = this.props;

    return [
      <ContentWrapper content={content} />,
    ];
  }
};

Layout.displayName = 'Layout';

Layout.propTypes = propTypesHandler({
  content: PropTypes.func.isRequired,
});

export default Layout;
