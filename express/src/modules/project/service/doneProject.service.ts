import { prismaClient } from '../../../shared/orm/prisma';




export const doneProjectService = async (project_id: string) => {
  const data = {
    done: true,
    updated_at: new Date().toISOString()
  };
  const projectDone = await prismaClient.project.update(
    { where: { project_id }, data }
  );
  console.log({ projectDone });

  return projectDone;
};
