import React from 'react'
import PlaidLink from 'react-plaid-link';
import {Meteor} from 'meteor/meteor';
import Plaid from '/lib/modules/Plaid';
import TotalDonations from '/client/modules/Transactions/TotalDonations';
import TransactionItems from '/client/modules/Transactions/TransactionItems';

import {Grid} from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={24}
      >
        <Grid
          item
        >
          <TotalDonations />
        </Grid>
        <Grid
          item
        >
          <TransactionItems />
        </Grid>
      </Grid>
    )
  }
}

export default App
