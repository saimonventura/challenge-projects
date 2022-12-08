import { prismaClient } from '../../../shared/orm/prisma';

export const userProjectsService = async (username: string) => {
  const projects = await prismaClient.project.findMany({
    where: { user: { username } },
  });

  return projects;
};
