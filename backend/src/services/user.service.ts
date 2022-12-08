import { PrismaClient, user } from '@prisma/client';
import { Request, Response } from 'express';

import { InvalidCredentials, USER_COOKIE_NAME } from '../utils/constants';
import { jwtSign, md5Hash } from '../utils/crypto';

const prisma = new PrismaClient();

export const createUserService = async (req: Request) => {
  req.body.password = md5Hash(req.body.password);
  if(!req.body.name) req.body.name = req.body.username;

  const user = await prisma.user.create({ data: req.body });
  console.log({ userCreated: user });

  const createdUser: any = { user_id: user.user_id, username: user.username, name: user.name }
  
  const jwtToken = jwtSign(createdUser);
  createdUser.token = jwtToken;

  return createdUser;
};

export const getUserByUsernameService = async (req: Request) => {
  return await prisma.user.findFirst({
    where: { username: req.body.username },
  });
};

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
