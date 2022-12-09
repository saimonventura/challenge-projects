import { Request } from 'express';
import { prismaClient } from '../../../shared/orm/prisma';




export const createProjectService = async (req: Request) => {
  const project = await prismaClient.project.create({ data: req.body });
  console.log({ projectCreated: project });

  return project;
};
