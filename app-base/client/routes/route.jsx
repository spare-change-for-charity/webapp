import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import Layout from '../Layout';

const route = ({content: Content, name, path}) => {
  FlowRouter.route(path, {
    name,
    action(routeParams, queryParams) {
      mount(Layout, {
        content: () => (<Content {...routeParams} {...queryParams} />), // eslint-disable-line react/display-name
      });
    },
  });
};

export default route;
