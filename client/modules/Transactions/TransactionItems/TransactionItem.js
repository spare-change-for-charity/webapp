import React from 'react';

const TransactionItem = ({name, amount, date}) => (
  <tr>
    <td>
      {name}
    </td>
    <td>
      ${amount.toFixed(2)}
    </td>
    <td>
      {date}
    </td>
  </tr>
);

export default TransactionItem;
