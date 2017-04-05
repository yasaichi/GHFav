// @flow
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

// TODO: Use redux-normalizr-middleware when it supports normalizr 3.x
// NOTE: The original one doesn't camelize keys of a payload
export default function normalizrMiddleware(_store) {
  return (next) => (action) => {
    const schema = action.meta && action.meta.schema;

    if (schema && action.payload && !action.error) {
      const normalized = normalize(camelizeKeys(action.payload), schema);
      return next({ ...action, payload: normalized });
    }

    return next(action);
  };
}
