import SimpleSchema from 'simpl-schema';
import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

import storeTransactions from './storeTransactions';

import Items from '/lib/modules/Items';

const storeAccessToken = new ValidatedMethod({
  name: 'plaid.storeAccessToken',
  validate: new SimpleSchema({
    publicToken: String,
  }).validator(),
  run({publicToken}) {
    if (Meteor.isClient) {
      return;
    }

    import('/server/configs/plaid').then(({default: plaid}) => {
      plaid.exchangePublicToken(publicToken, Meteor.bindEnvironment((error, tokenResponse) => {
        if (error) {
          console.log('ERROR', error);
        }
        console.log('TOKEN_RESPONSE', tokenResponse);
        const {
          access_token: accessToken,
          item_id: itemId,
          request_id: requestId,
          status_code: statusCode,
        } = tokenResponse;

        Items.create({accessToken, itemId});

        storeTransactions.call({accessToken});
      }));
    });
  },
});

export default storeAccessToken;
