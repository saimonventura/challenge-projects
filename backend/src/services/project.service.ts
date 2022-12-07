import { PrismaClient } from '@prisma/client';
import { Request } from 'express';


const prisma = new PrismaClient();

export const createProjectService = async (req: Request) => {
  console.log('createProjectService', req.body)
  const project = await prisma.project.create({ data: req.body });
  console.log({ projectCreated: project });

  return project;
};
