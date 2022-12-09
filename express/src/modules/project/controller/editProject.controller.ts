import { Request, Response } from 'express';
import { editProjectService } from "../service/editProject.service";


export const editProjectController = async (req: Request, res: Response) => {
  const projectUpdated = await editProjectService(req);

  res.json(projectUpdated);
};
