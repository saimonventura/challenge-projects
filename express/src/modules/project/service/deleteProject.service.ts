import { prismaClient } from '../../../shared/orm/prisma';


export const deleteProjectService = async (project_id: string) => {
  const projectDeleted = await prismaClient.project.delete(
    { where: { project_id } }
  );
  console.log({ projectDeleted });

  return projectDeleted;
};
