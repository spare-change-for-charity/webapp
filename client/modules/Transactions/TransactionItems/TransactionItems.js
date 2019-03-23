import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionItems = ({transactions}) => (
  <table>
    <tbody>
      {transactions.map(({_id, name, amount, date}) =>
        <TransactionItem key={_id} amount={amount} name={name} date={date} />
      )}
    </tbody>
  </table>
);

export default TransactionItems;
