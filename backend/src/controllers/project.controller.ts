import { Request, Response } from 'express';
import { getCityUfFromPostalCodeService } from '../services/getCityUfFromPostalCode.service';
import { createProjectService, deleteProjectService, doneProjectService, editProjectService, projectByIdService, userProjectsService } from '../services/project.service';
import { ProjectNotFound, Unauthorized } from '../utils/constants';
import { catchResponseMessage } from '../utils/controller.error';
import { createProjectValidate } from '../validations/project.validation';

export const createProjectController = async (req: Request, res: Response) => {
  try {
    createProjectValidate(req, res);

    req.body.username = req.headers.username;

    const createdProject = await createProjectService(req);

    res.status(201).json(createdProject);
  } catch ({ message }) {
    catchResponseMessage(message, res)
  }
};

export const projectsController = async (req: Request, res: Response) => {
  const projects = await userProjectsService(req.body.username);

  res.json(projects);
};

export const projectController = async (req: Request, res: Response) => {
  const project = await projectByIdService(req.params.id);

  if (!project) return res.status(404).json({ error: ProjectNotFound })

  const { city, uf } = await getCityUfFromPostalCodeService(project.zip_code);
  project.zip_code = `${city} / ${uf}`

  res.json(project);
};

export const editProjectController = async (req: Request, res: Response) => {
  const projectUpdated = await editProjectService(req)

  res.json(projectUpdated);
};

export const doneProjectController = async (req: Request, res: Response) => {
  const projectDone = await doneProjectService(req.params.id as string)

  res.json(projectDone);
};

export const deleteProjectController = async (req: Request, res: Response) => {
  await deleteProjectService(req.params.id as string)
  res.json({ status: 'deleted' });
};
