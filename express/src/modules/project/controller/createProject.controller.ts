import { Request, Response } from 'express';
import { catchResponseMessage } from '../../../shared/utils/controller.error';
import { createProjectService } from "../service/createProject.service";
import { createProjectValidate } from '../validation/createProjec.validation';

export const createProjectController = async (req: Request, res: Response) => {
  try {
    createProjectValidate(req, res);

    req.body.username = req.headers.username;

    const createdProject = await createProjectService(req);

    res.status(201).json(createdProject);
  } catch ({ message }) {
    catchResponseMessage(message, res);
  }
};
