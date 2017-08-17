import route from './route';

import AuthPage from '../pages/AuthPage';

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
