import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  // Create a "user" model,
  user: {
    id: primaryKey(() => '1'),
    username: () => '111',
    nickname: () => 'aaa',
  },
})