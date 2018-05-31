import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import logger from '/lib/logger';

import {ErrorBoundary} from '/client/atoms';
import ContentWrapper from './ContentWrapper';
import NavBar from './NavBar';

const Layout = ({content}) => (
  <ErrorBoundary fileName='Layout.js'>
    <NavBar />
    <ContentWrapper content={content} />
  </ErrorBoundary>
);

Layout.displayName = 'Layout';

Layout.propTypes = propTypesHandler({
  content: PropTypes.func.isRequired,
});

export default Layout;
