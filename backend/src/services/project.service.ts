import { PrismaClient } from '@prisma/client';
import { Request } from 'express';


const prisma = new PrismaClient();

export const createProjectService = async (req: Request) => {
  const project = await prisma.project.create({ data: req.body });
  console.log({ projectCreated: project });

  return project;
};

export const userProjectsService = async (username: string) => {
  const projects = await prisma.project.findMany({
    where: { user: { username } },
  });

  return projects;
}

export const projectByIdService = async (project_id: string) => {
  console.log({ project_id })
  const project = await prisma.project.findFirst({
    where: { project_id: { equals: project_id } },
  });

  return project;
}

export const editProjectService = async (req: Request) => {
  const data: { [key: string]: string | Date } = {
    updated_at: new Date().toISOString()
  }
  if (req.body.title) data.title = req.body.title;
  if (req.body.zip_code) data.zip_code = req.body.zip_code;
  if (req.body.cost) data.cost = req.body.cost;
  if (req.body.deadline) data.deadline = req.body.deadline;


  const project = await prisma.project.update(
    { where: { project_id: req.params.id as string }, data }
  );
  console.log({ projectUpdated: project });

  return project;
};
