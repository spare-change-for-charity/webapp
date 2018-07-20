import React from 'react';
import {MeteorPackages, initialContext} from 'meteor/merlin:react-context';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';

import {ErrorBoundary} from '/client/atoms';
import ContentWrapper from './ContentWrapper';
import NavBar from './NavBar';

const Layout = ({content}) => (
  <MeteorPackages.Provider context={initialContext}>
    <ErrorBoundary fileName='Layout.js'>
      <NavBar />
      <ContentWrapper content={content} />
    </ErrorBoundary>
  </MeteorPackages.Provider>
);

Layout.displayName = 'Layout';

Layout.propTypes = propTypesHandler({
  content: PropTypes.func.isRequired,
});

export default Layout;
