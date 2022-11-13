/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import userRouter from './router/user';
import { checkInit } from './modules/orm/pg';

const app = express();

app.use(async (_req, res, next) => {
  const isConnect = await checkInit();
  if (isConnect) return next();
  else res.status(500).json({ errorMessage: 'DB error' });
});
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
