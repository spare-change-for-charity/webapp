import {Meteor} from 'meteor/meteor';
import plaid from 'plaid';

const {clientId, secret} = Meteor.settings.Plaid;
const {env, key: publicKey} = Meteor.settings.public.Plaid;

const client = new plaid.Client(
  clientId,
  secret,
  publicKey,
  plaid.environments[env],
  {version: '2018-05-22'}
);

export default client;
