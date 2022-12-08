import { Request, Response } from 'express';
import { userProjectsService } from "../service/userProjects.service";


export const projectsController = async (req: Request, res: Response) => {
  const projects = await userProjectsService(req.body.username);

  res.json(projects);
};
