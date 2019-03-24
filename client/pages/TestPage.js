import React from 'react'
import PlaidLink from 'react-plaid-link';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Grid} from '@material-ui/core';
import Plaid from '/lib/modules/Plaid';
import TotalDonations from '/client/modules/Transactions/TotalDonations';
import TransactionItems from '/client/modules/Transactions/TransactionItems';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import theme from '/client/styles/theme';

class App extends React.Component {
  handleOnSuccess(publicToken, metadata) {
    // send token to client server
    Plaid.storeAccessToken({publicToken});
    FlowRouter.go('stats')
  }

  handleOnExit() {
    // handle the case when your user exits Link
    console.log('exit')
  }

  // getAndStoreTransactions() {
  //   Plaid.storeTransactions()
  // }

  render() {
    const {classes} = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card>
          <CardContent>
            <Typography variant='h2'>
              Connect your Account
            </Typography>
          </CardContent>
          <CardActions className={classes.root}>
            <PlaidLink
              clientName="Spare - Change for Charity"
              env={Meteor.settings.public.Plaid.env}
              product={["auth", "transactions"]}
              publicKey={Meteor.settings.public.Plaid.key}
              onExit={this.handleOnExit}
              onSuccess={this.handleOnSuccess}
              className='plaid-link'
              style={styles.button}
            >
              Connect
            </PlaidLink>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

const styles = {
  root: {
    justifyContent: 'center',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default withStyles(styles)(App);
