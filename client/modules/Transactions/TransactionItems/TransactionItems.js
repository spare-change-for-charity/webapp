import React from 'react';
import TransactionItem from './TransactionItem';
import {format} from 'date-fns';

const TransactionItems = ({transactions}) => (
  <table>
    <tbody>
      {transactions.map(({_id, name, amount, paidAt}) =>
        <TransactionItem key={_id} amount={amount} name={name} date={format(paidAt, 'MM/DD/YYYY')} />
      )}
    </tbody>
  </table>
);

export default TransactionItems;
