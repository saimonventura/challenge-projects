import { Router } from 'express';

import {
  deleteProjectController,
  doneProjectController,
  editProjectController,
  projectsController,
} from '../controllers/project.controller';

const projectsRoutes = Router();

projectsRoutes.get('/', projectsController);
projectsRoutes.put('/:id', editProjectController);
projectsRoutes.patch('/:id/done', doneProjectController);
projectsRoutes.delete('/:id', deleteProjectController);

export { projectsRoutes };
