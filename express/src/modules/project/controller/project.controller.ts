import { Request, Response } from 'express';
import { getCityUfFromPostalCodeService } from '../../../shared/service/getCityUfFromPostalCode.service';
import { ProjectNotFound } from '../../../shared/utils/constants';

import { projectByIdService } from "../service/projectById.service";

export const projectController = async (req: Request, res: Response) => {
  const project = await projectByIdService(req.query.id as string);

  if (!project) return res.status(404).json({ error: ProjectNotFound })

  const { city, uf } = await getCityUfFromPostalCodeService(project.zip_code);
  if(city) project.zip_code = `${city} / ${uf}`;

  res.json(project);
};


