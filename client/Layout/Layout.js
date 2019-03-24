import React from 'react';
import {MeteorPackages, initialContext} from 'meteor/merlin:react-context';
import {MuiThemeProvider} from '@material-ui/core/styles';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';

import {ErrorBoundary} from '/client/atoms';
import materialTheme from '/client/styles/materialTheme';
import ContentWrapper from './ContentWrapper';
import NavBar from './NavBar';

const Layout = ({content}) => (
  <MeteorPackages.Provider context={initialContext}>
    <MuiThemeProvider theme={materialTheme}>
      <ErrorBoundary fileName='Layout.js'>
        {/*<NavBar />*/}

        <header style={{
          margin: '10px 0 50px',
          color: 'white',
          lineHeight: 1,
          textAlign: 'center',
        }}>
          <h1 style={{fontSize: '60px'}}>
            Spare
            <div class='subtitle' style={{fontSize: '20px'}}>
              Change for Charity
            </div>
          </h1>
        </header>

        <ContentWrapper content={content} />
      </ErrorBoundary>
    </MuiThemeProvider>
  </MeteorPackages.Provider>
);

Layout.displayName = 'Layout';

Layout.propTypes = propTypesHandler({
  content: PropTypes.func.isRequired,
});

export default Layout;
