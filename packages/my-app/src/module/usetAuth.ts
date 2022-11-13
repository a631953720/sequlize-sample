import { UserAuth } from './orm/userAuth';

type CreateUserOptions = {
  UserId: number;
  Token: string;
  RefreshToken: string;
  TokenExpiredAt: Date;
};

// todo: 補上其他方法

export async function createUserAuth(options: CreateUserOptions) {
  try {
    const { UserId, Token, RefreshToken, TokenExpiredAt } = options;
    const result = await UserAuth.create({
      UserId,
      Token,
      TokenExpiredAt,
      RefreshToken
    });

    return result.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
}
