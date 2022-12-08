import { PrismaClient } from '@prisma/client';
import { Request } from 'express';


const prisma = new PrismaClient();

export const createProjectService = async (req: Request) => {
  const project = await prisma.project.create({ data: req.body });
  console.log({ projectCreated: project });

  return project;
};

export const userProjectsService = async (req: Request) => {
  const projects = await prisma.project.findMany({
    where: {
      user: {
        username: req.body.username
      }
    },
  });

  return projects;
}
