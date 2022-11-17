import { Router } from 'express';
import { UserAttributes } from '../modules/orm/user';
import { findUserByUserId, createUser, updateAliasByUserId, deleteUserByUserId, findAllUser } from '../modules/user';

const router = Router();

function userResponseDTO(data: UserAttributes) {
  delete data.Password;
  delete data.Salt;

  return data;
}

router.get('/list', async (req, res) => {
  const result = await findAllUser();
  if (result === null) return res.status(404).send('not found');

  return res.status(200).json(
    result.map((user) => {
      return userResponseDTO(user);
    })
  );
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).send('id error');
  const result = await findUserByUserId(id);
  if (result === null) return res.status(404).send('not found');

  return res.status(200).json(userResponseDTO(result));
});

router.post('/', async (req, res) => {
  const { Name, Alias, Password } = req.body;
  const result = await createUser({ Name, Alias, Password });

  if (result) {
    return res.status(201).json(userResponseDTO(result));
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

export default router;
