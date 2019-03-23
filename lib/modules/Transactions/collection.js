import SimpleSchema from 'simpl-schema';
import {Mongo} from 'meteor/mongo';

import Dates from '/lib/commonSchemas/Dates';

const Transactions = new Mongo.Collection('transactions');

const Transaction = new SimpleSchema({
  transactionId: String,
  name: String,
  amount: Number,
  paidAtSimple: Date,
  paidAt: Date,
}).extend(Dates);

Transactions.attachSchema(Transaction);

Transactions.deny({update: () => true});

if (Meteor.isServer) {
  Meteor.startup(() => {
    Transactions._ensureIndex({transactionId: 1}, {unique: true});
  });
}

export default Transactions;
