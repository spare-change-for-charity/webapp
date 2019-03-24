import React from 'react';

const TotalDonations = ({donationTotal}) => (
  <div>
    <h2>
      ${donationTotal.toFixed(2)}
    </h2>
  </div>
);

export default TotalDonations;
