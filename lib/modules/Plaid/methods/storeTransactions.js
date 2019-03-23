import SimpleSchema from 'simpl-schema';
import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

import Transactions from '/lib/modules/Transactions';

const storeTransactions = new ValidatedMethod({
  name: 'plaid.storeTransactions',
  validate: new SimpleSchema({
    accessToken: String,
  }).validator(),
  run({accessToken}) {
    if (Meteor.isClient) {
      return;
    }

    const startDate = '2019-02-24';
    const endDate = '2019-03-24';

    import('/server/configs/plaid').then(({default: plaid}) => {
      plaid.getTransactions(accessToken, startDate, endDate, {
        count: 250,
        offset: 0,
      }, Meteor.bindEnvironment((error, response) => {
        if (error) {
          console.log(error);
          return;
        }

        const {
          accounts,
          items,
          request_id: requestId,
          status_code: statusCode,
          total_transactions: totalTransactions,
          transactions,
        } = response;

        transactions.forEach(transaction => {
          const {
            name,
            amount,
            date: paidAtSimple,
            transaction_id: transactionId,
          } = transaction;
          const [yearString, monthString, dayString] = paidAtSimple.split('-');
          const year = Number(yearString);
          const month = Number(monthString) - 1;
          const day = Number(dayString);
          const paidAt = new Date(year, month, day);

          const newTxID = Transactions.insert({
            transactionId,
            name,
            amount,
            paidAt,
            paidAtSimple,
          });
        });
      }));
    });
  },
});

export default storeTransactions;
