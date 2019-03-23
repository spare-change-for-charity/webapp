import SimpleSchema from 'simpl-schema';
import {Mongo} from 'meteor/mongo';

import Dates from '/lib/commonSchemas/Dates';

const Items = new Mongo.Collection('items');

const Item = new SimpleSchema({
  itemId: String,
  accessToken: String,
}).extend(Dates);

Items.attachSchema(Item);

Items.deny({update: () => true});

export default Items;
