import { Router } from 'express';
import {
  findUserByUserId,
  createUser,
  updateAliasByUserId,
  deleteUserByUserId,
  findAllUser,
} from '../modules/user';
import { createUserAuth } from '../modules/usetAuth';

const router = Router();

router.get('/list', async (req, res) => {
  const result = await findAllUser();
  if (result === null) return res.status(404).send('not found');

  return res.status(200).json(
    result.map((user) => {
      delete user.Password;
      return user;
    })
  );
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).send('id error');
  const result = await findUserByUserId(id);
  if (result === null) return res.status(404).send('not found');

  delete result.Password;
  return res.status(200).json(result);
});

router.post('/', async (req, res) => {
  const { Name, Alias, Password } = req.body;
  const result = await createUser({ Name, Alias, Password });

  if (result) {
    delete result.Password;
    return res.status(201).json(result);
  } else return res.status(500).send('error');
});

router.put('/:id/Alias', async (req, res) => {
  const { Alias } = req.body;
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).send('id error');

  const result = await updateAliasByUserId({ id, Alias });

  if (result) return res.status(200).send('ok');
  else return res.status(500).send('error');
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).send('id error');
  const result = await deleteUserByUserId(id);

  if (result) return res.status(200).send('ok');
  else return res.status(500).send('error');
});

createUser({
  Name: 'kk',
  Password: '123456',
  Alias: ''
}).then((data) => {
  createUserAuth({
    UserId: data.id,
    Token: '',
    TokenExpiredAt: new Date(),
    RefreshToken: ''
  });
});

export default router;
