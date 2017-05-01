// @flow

export default function noopMiddleware() {
  return (next) => (action) => next(action);
}
