import React from 'react'
import PlaidLink from 'react-plaid-link';
import {Meteor} from 'meteor/meteor';
import Plaid from '/lib/modules/Plaid';
import TransactionItems from '/client/modules/Transactions/TransactionItems';

class App extends React.Component {
  handleOnSuccess(publicToken, metadata) {
    // send token to client server
    console.log(publicToken)
    console.log(metadata)
    Plaid.storeAccessToken({publicToken});
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }

  // getAndStoreTransactions() {
  //   Plaid.storeTransactions()
  // }

  render() {
    return (
      <React.Fragment>
        <PlaidLink
          clientName="Spare - Change for Charity"
          env={Meteor.settings.public.Plaid.env}
          product={["auth", "transactions"]}
          publicKey={Meteor.settings.public.Plaid.key}
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}>
          Open Link and connect your bank!
        </PlaidLink>
        <TransactionItems />
      </React.Fragment>
    )
  }
}

export default App
