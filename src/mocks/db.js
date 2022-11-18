import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const db = factory({
  task: {
    id: primaryKey(faker.datatype.number),
    title: String,
    content: Text,
    status: Number,
    start_date: String,
    end_date: String,
    user: {
      nickname: faker.name.firstName,
    }
  }
});

// The default tasks created each time you refresh the page.
db.task.create({ title: "aaa", content: "aaa", status: 0, start_date: "2022-11-15", end_date: "2022-11-16" });
db.task.create({ title: "bbb", content: "bbb", status: 1, start_date: "2022-11-16", end_date: "2022-11-17" });
db.task.create({ title: "ccc", content: "ccc", status: 2, start_date: "2022-11-17", end_date: "2022-11-18" });
db.task.create({ title: "ddd", content: "ddd", status: 2, start_date: "2022-11-18", end_date: "2022-11-19" });
