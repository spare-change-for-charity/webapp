import route from './route';

import AuthPage from '../pages/AuthPage';
import TestPage from '../pages/TestPage';

route({
  name: 'login.index',
  path: '/',
  content: AuthPage,
});

route({
  name: 'login',
  path: '/login',
  content: AuthPage,
});

route({
  name: 'test',
  path: '/test',
  content: TestPage,
});
