import { prismaClient } from '../../../shared/orm/prisma';




export const projectByIdService = async (project_id: string) => {
  console.log({ project_id });
  const project = await prismaClient.project.findFirst({
    where: { project_id: { equals: project_id } },
  });

  return project;
};
