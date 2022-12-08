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

  const projectUpdated = await prisma.project.update(
    { where: { project_id: req.params.id as string }, data }
  );
  console.log({ projectUpdated });

  return projectUpdated;
};

export const doneProjectService = async (project_id: string) => {
  const data = {
    done: true,
    updated_at: new Date().toISOString()
  }
  const projectDone = await prisma.project.update(
    { where: { project_id }, data }
  );
  console.log({ projectDone });

  return projectDone;
};

export const deleteProjectService = async (project_id: string) => {
  const projectDeleted = await prisma.project.delete(
    { where: { project_id } }
  );
  console.log({ projectDeleted });

  return projectDeleted;
};
