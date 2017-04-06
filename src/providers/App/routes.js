// @flow
import type { Component } from 'react';

import Home from '../../containers/Home';
import RepositoryDetail from '../../containers/RepositoryDetail';

type Route = {|
  exact?: boolean,
  component: Component<*, *, *>,
  path: string,
|};

const routes: Array<Route> = [
  { path: '/', component: Home },
  { path: '/repos/:owner/:repo', component: RepositoryDetail },
];

export default routes;
