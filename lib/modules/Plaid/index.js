const Plaid = {};

import methods from './methods';
import attachMethods from '../utility/attachMethods';

attachMethods(Plaid, methods);

export default Plaid;
