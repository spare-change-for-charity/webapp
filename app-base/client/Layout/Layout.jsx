import PropTypes from 'prop-types';
import React from 'react';

import ContentWrapper from './ContentWrapper';

const Layout = ({content}) => {
  return (
    <div>
      <ContentWrapper content={content} />
    </div>
  );
};

Layout.displayName = 'Layout';

Layout.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Layout;
