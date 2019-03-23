import {ValidatedMethod} from 'meteor/mdg:validated-method';

import Items from '../collection';

const create = new ValidatedMethod({
  name: 'items.create',
  validate: Items.simpleSchema().pick(
    'itemId',
    'accessToken',
  ).validator(),
  run({itemId, accessToken}) {
    console.log('inserting');
    return Items.insert({itemId, accessToken});
  },
});

export default create;
