import {Picker} from 'meteor/meteorhacks:picker';

Picker.route('/.well-known/acme-challenge/:routeKey', (params, request, response) => {
  response.writeHead('200', {'Content-Type': 'text/plain'});
  response.write(process.env.SSL_PAGE_KEY);
  response.end();
});
