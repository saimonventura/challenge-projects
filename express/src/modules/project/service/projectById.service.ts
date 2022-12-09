import { prismaClient } from "../../../shared/orm/prisma";


export const projectByIdService = async (project_id: string) => {
  if(!project_id) return null;
  
  const project = await prismaClient.project.findFirstOrThrow({
    where: { project_id: { equals: project_id } },
  });

  return project;
};
