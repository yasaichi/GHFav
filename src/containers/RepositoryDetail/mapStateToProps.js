// @flow
import { createSelector } from 'reselect';

export default createSelector(
  (state) => state.routes,
  (routes) => ({
    routes,
  }),
);
