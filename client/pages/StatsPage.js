import React from 'react'
import PlaidLink from 'react-plaid-link';
import {Meteor} from 'meteor/meteor';
import Plaid from '/lib/modules/Plaid';
import TotalDonations from '/client/modules/Transactions/TotalDonations';
import TransactionItems from '/client/modules/Transactions/TransactionItems';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TotalDonations />
        <TransactionItems />
      </React.Fragment>
    )
  }
}

export default App
