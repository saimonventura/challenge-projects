import { Router } from 'express';

import {
  deleteProjectController,
  doneProjectController,
  editProjectController,
  projectsController,
} from '../controllers/project.controller';
import { isAuthenticatedMiddleware } from '../middlewares/isAuthenticated.middleware';

const projectsRoutes = Router();

projectsRoutes.get('/', isAuthenticatedMiddleware, projectsController);
projectsRoutes.put('/:id', isAuthenticatedMiddleware, editProjectController);
projectsRoutes.patch('/:id/done', doneProjectController);
projectsRoutes.delete('/:id', deleteProjectController);

export { projectsRoutes };
