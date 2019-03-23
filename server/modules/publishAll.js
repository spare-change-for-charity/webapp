import {Meteor} from 'meteor/meteor';

import Items from '/lib/modules/Items';
import Transactions from '/lib/modules/Transactions';
import Users from '/lib/modules/Users';

Meteor.publish(null, function () {
  // if (! this.userId) {
  //   return null;
  // }

  return Items.find({});
});

Meteor.publish(null, function () {
  // if (! this.userId) {
  //   return null;
  // }

  return Transactions.find({});
});

Meteor.publish(null, function () {
  // if (! this.userId) {
  //   return null;
  // }

  return Users.find({});
});
