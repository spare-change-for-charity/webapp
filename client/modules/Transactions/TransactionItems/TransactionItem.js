import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TransactionItem = ({name, amount, date}) => (
  <TableRow>
    <TableCell>
      {name}
    </TableCell>
    <TableCell>
      ${(
        amount > 60
        ? amount / 3
        : amount > 30
          ? amount / 2
          : amount
      ).toFixed(2)}
    </TableCell>
    <TableCell>
      {date}
    </TableCell>
  </TableRow>
);

export default TransactionItem;
