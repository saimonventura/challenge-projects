import { Request } from 'express';
import { prismaClient } from '../../../shared/orm/prisma';




export const editProjectService = async (req: Request) => {
  const data: { [key: string]: string | Date; } = {
    updated_at: new Date().toISOString()
  };
  if (req.body.title)
    data.title = req.body.title;
  if (req.body.zip_code)
    data.zip_code = req.body.zip_code;
  if (req.body.cost)
    data.cost = req.body.cost;
  if (req.body.deadline)
    data.deadline = req.body.deadline;

  const projectUpdated = await prismaClient.project.update(
    { where: { project_id: req.params.id as string }, data }
  );
  console.log({ projectUpdated });

  return projectUpdated;
};
