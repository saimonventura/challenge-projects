import { Request, Response } from 'express';
import { getCityUfFromPostalCodeService } from '../services/getCityUfFromPostalCode.service';
import { createProjectService, projectService, userProjectsService } from '../services/project.service';
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
  const projects = await userProjectsService(req);

  res.json(projects);
};

export const projectController = async (req: Request, res: Response) => {
  const project = await projectService(req);

  if (!project) return res.status(404).json({ error: 'Project not found' })

  const { city, uf } = await getCityUfFromPostalCodeService(project.zip_code);
  project.zip_code = `${city} / ${uf}`

  res.json(project);
};

export const editProjectController = (req: Request, res: Response) => {
  return 'editProjectController';
};

export const doneProjectController = (req: Request, res: Response) => {
  return 'doneProjectController';
};

export const deleteProjectController = (req: Request, res: Response) => {
  return 'deleteProjectController';
};
