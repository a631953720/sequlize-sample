/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import userRouter from "./router/user";
// import { checkInit } from './module/pg';
// import {
//   findAllUser,
//   findUserByUserName,
//   findUserByUserId,
//   updateAliasByUserName,
//   updatePswByUserName,
//   deleteUserByUserName,
//   createUser,
// } from './module/user';

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to user_sample!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

// async function main() {
//   await checkInit();

//   console.log(await findAllUser());
//   console.log(await createUser({ Name: 'foo', Alias: 'foo', Password: 'foo' }));
//   console.log(await updateAliasByUserName({ Name: 'foo', Alias: 'f22' }));
//   console.log(await updateAliasByUserName({ Name: 'foo', Alias: 'f22' }));
//   console.log(await updatePswByUserName({ Name: 'foo', Password: 'f22' }));
//   console.log(await findUserByUserName('foo'));
//   console.log(await findUserByUserId(7));
//   // console.log(await deleteUserByUserName('foo'));
// }

// main();
