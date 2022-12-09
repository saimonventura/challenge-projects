import { user } from '@prisma/client';
import { Request, Response } from 'express';
import { InvalidCredentials, USER_COOKIE_NAME } from '../../../shared/utils/constants';
import { jwtSign, md5Hash } from '../../../shared/utils/crypto';

export const loginUserService = async (
  req: Request,
  res: Response,
  user: user
) => {
  const hashPassword = md5Hash(req.body.password);

  if (hashPassword !== user.password) {
    return res.status(401).json({ error: InvalidCredentials });
  }

  console.log({ loginUser: user.username, at: new Date() });

  const jwtToken = jwtSign(user);

  res.cookie(USER_COOKIE_NAME, jwtToken, { expires: new Date(Date.now() + 60 * 60 * 1000), httpOnly: true }).status(200).json({ token: jwtToken });
};
