import { Request, Response } from 'express';
import { deleteProjectService } from "../service/deleteProject.service";


export const deleteProjectController = async (req: Request, res: Response) => {
  await deleteProjectService(req.params.id as string);
  res.json({ status: 'deleted' });
};
