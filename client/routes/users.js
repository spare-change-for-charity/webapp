import route from './route';

import AuthPage from '../pages/AuthPage';
import TestPage from '../pages/TestPage';

route({
  name: 'login.index',
  path: '/',
  content: TestPage,
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
