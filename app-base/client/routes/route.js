import React from 'react';
import {render} from 'react-dom';
import {FlowRouter} from 'meteor/kadira:flow-router';

import Layout from '../Layout';

const root = window.document.getElementById('react-root');

const route = ({content: Content, name, path}) => {
  FlowRouter.route(path, {
    name,
    action(routeParams, queryParams) {
      const content = () => (<Content {...routeParams} {...queryParams} />); // eslint-disable-line react/display-name
      render(
        <Layout content={content} />,
        root,
      );
    },
  });
};

export default route;
