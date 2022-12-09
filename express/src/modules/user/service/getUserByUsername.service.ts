import { Request } from 'express';
import { prismaClient } from '../../../shared/orm/prisma';

export const getUserByUsernameService = async (req: Request) => {
  return await prismaClient.user.findFirst({
    where: { username: req.body.username },
  });
};
