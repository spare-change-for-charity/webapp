import React from 'react';
import TransactionItem from './TransactionItem';
import {format} from 'date-fns';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TransactionItems = ({transactions, classes}) => (
  <Paper className={classes.root}>
    <Typography variant='h4' component='h2' align='center' gutterBottom>
      Transactions
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Name
          </TableCell>
          <TableCell>
            Amount
          </TableCell>
          <TableCell>
            Date
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(({_id, name, amount, paidAt}) =>
          <TransactionItem key={_id} amount={amount} name={name} date={format(paidAt, 'MM/DD/YYYY')} />
        )}
      </TableBody>
    </Table>
  </Paper>
);

const styles = {
  root: {
    padding: '8px 0',
  },
};

export default withStyles(styles)(TransactionItems);
