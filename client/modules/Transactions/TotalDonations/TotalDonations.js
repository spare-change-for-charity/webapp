import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TotalDonations = ({donationTotal}) => (
  <Card>
    <CardContent>
      <Typography variant='h4' component='h2' align='center' gutterBottom>
        Total Donated
      </Typography>
      <Typography variant='h3' align='center'>
        ${donationTotal.toFixed(2)}
      </Typography>
    </CardContent>
  </Card>
);

export default TotalDonations;
