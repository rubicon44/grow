import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const db = factory({
  user: {
    id: primaryKey(faker.datatype.number),
    username: String,
    nickname: String,
    email: faker.internet.email,
    bio: faker.random.words,
    firebase_id: faker.datatype.uuid,
  },
  task: {
    id: primaryKey(faker.datatype.number),
    title: String,
    content: Text,
    status: Number,
    start_date: String,
    end_date: String,
    user_id: String,
    user: {
      username: String,
      nickname: String,
    },
  }
});

// The default tasks created each time you refresh the page.
const user_aaa = db.user.create({ id: 1, username: "aaa", nickname: "aaa" });
const user_bbb = db.user.create({ username: "bbb", nickname: "bbb" });
const user_ccc = db.user.create({ username: "ccc", nickname: "ccc" });

// console.log(localStorage.getItem('user'));

db.task.create({ title: "aaa", content: "aaa", status: 0, start_date: "2022-11-15", end_date: "2022-11-16", user_id: user_aaa.id, user: user_aaa });
db.task.create({ title: "bbb", content: "bbb", status: 1, start_date: "2022-11-16", end_date: "2022-11-17", user_id: user_bbb.id, user: user_bbb });
db.task.create({ title: "ccc", content: "ccc", status: 2, start_date: "2022-11-17", end_date: "2022-11-18", user_id: user_ccc.id, user: user_ccc });