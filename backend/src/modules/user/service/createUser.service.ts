import { Request } from 'express';
import { prismaClient } from '../../../shared/orm/prisma';
import { jwtSign, md5Hash } from '../../../shared/utils/crypto';


export const createUserService = async (req: Request) => {
  req.body.password = md5Hash(req.body.password);
  if (!req.body.name)
    req.body.name = req.body.username;

  const user = await prismaClient.user.create({ data: req.body });
  console.log({ userCreated: user });

  const createdUser: any = { user_id: user.user_id, username: user.username, name: user.name };

  const jwtToken = jwtSign(createdUser);
  createdUser.token = jwtToken;

  return createdUser;
};
