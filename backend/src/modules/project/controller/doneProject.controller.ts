import { Request, Response } from 'express';
import { doneProjectService } from "../service/doneProject.service";


export const doneProjectController = async (req: Request, res: Response) => {
  const projectDone = await doneProjectService(req.params.id as string);

  res.json(projectDone);
};
