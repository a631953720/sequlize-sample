import * as bcrypt from 'bcrypt';

export function generateSalt(): Promise<string> {
  return new Promise((res, rej) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.error(err);
        rej(err);
      } else {
        res(salt);
      }
    });
  });
}

export function hashTheString(data: string | Buffer, salt: string): Promise<string> {
  return new Promise((res, rej) => {
    bcrypt.hash(data, salt, (err, hash) => {
      if (err) {
        console.error(err);
        rej(err);
      } else {
        res(hash);
      }
    });
  });
}
