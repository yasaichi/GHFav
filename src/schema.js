import { schema } from 'normalizr';

export const organization = new schema.Entity('organizations');
export const repository = new schema.Entity('repositories');
export const user = new schema.Entity('users');

export const event = new schema.Entity('events', {
  actor: user,
  org: organization,
  repo: repository,
});
