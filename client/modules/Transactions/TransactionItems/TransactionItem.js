import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TransactionItem = ({name, amount, date}) => (
  <TableRow>
    <TableCell>
      {name}
    </TableCell>
    <TableCell>
      ${amount.toFixed(2)}
    </TableCell>
    <TableCell>
      {date}
    </TableCell>
  </TableRow>
);

export default TransactionItem;
