import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import Transactions from '/lib/modules/Transactions';
import Users from '/lib/modules/Users';

import TotalDonations from './TotalDonations';

const getChange = (amount) => Math.ceil(amount) - amount;

const adjust = (amount) => (
  amount > 60
  ? amount / 3
  : amount > 30
    ? amount / 2
    : amount
)

const getData = ({threadId}) => {
  const transactionsSub = Meteor.subscribe('transactions.all');

  const loggedInId = Meteor.userId();
  const transactions = Transactions.find({}).fetch();

  const donationTotal = transactions.reduce((sum, {amount}) => (
    sum + (amount > 0 ? getChange(adjust(amount)) : 0)
  ), 0);

  // if (thread) {
  //   const {userIds} = thread;
  //   const messages = Messages.find({threadId}).fetch();
  //   const users = Users.find({_id: {$in: userIds}}).fetch();
  //   const messagesWithUsers = messages.map(({_id, fromId, text}) => ({
  //     fromId,
  //     sender: users.find(user => user._id === fromId),
  //     text,
  //   }));
  //
  //   return {
  //     loggedInId,
  //     messages: messagesWithUsers,
  //   };
  // }

  return {
    donationTotal,
    loggedInId,
  };
};

export default withTracker(getData)(TotalDonations);
