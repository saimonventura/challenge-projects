import { PrismaClient, user } from '@prisma/client';
import { Request, Response } from 'express';
import { USER_COOKIE_NAME } from '../utils/constants';
import { jwtSign, md5Hash } from '../utils/crypto';

const prisma = new PrismaClient();

const InvalidCredentials = 'Invalid Credentials';

export const createUserService = async (req: Request, res: Response) => {
  req.body.password = md5Hash(req.body.password);

  const user = await prisma.user.create({ data: req.body });
  console.log({ userCreated: user });

  return { id: user.id, username: user.username, name: user.name };
};

export const getUserByUsernameService = async (req: Request, res: Response) => {
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

  res.cookie(USER_COOKIE_NAME, jwtToken).status(200).json({ token: jwtToken });
};
