import { generateSalt, hashTheString } from './utils';

describe('utils', () => {
  it('generate salt can work', async () => {
    const salt = await generateSalt();
    
    expect(typeof salt).toEqual('string');
  });

  it('hashTheString can work', async () => {
    const salt = await generateSalt();
    const hash = await hashTheString('123456', salt);

    expect(hash.includes(salt)).toEqual(true);
  });
});
