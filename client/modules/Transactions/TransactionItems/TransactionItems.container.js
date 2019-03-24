import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import Transactions from '/lib/modules/Transactions';
import Users from '/lib/modules/Users';

import TransactionItems from './TransactionItems';

const getData = ({threadId}) => {
  const transactionsSub = Meteor.subscribe('transactions.all');

  const loggedInId = Meteor.userId();
  const transactions = Transactions.find({}, {sort: {paidAt: -1}, limit: 10}).fetch();

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
    transactions,
    loggedInId,
  };
};

export default withTracker(getData)(TransactionItems);
