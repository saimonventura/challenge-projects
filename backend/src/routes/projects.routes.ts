import { Router } from 'express';

import {
  deleteProjectController,
  doneProjectController,
  editProjectController,
  projectsController,
} from '../controllers/project.controller';
import { isAuthenticatedMiddleware } from '../middlewares/isAuthenticated.middleware';
import { projectExistsAndItIsMineMiddleware } from '../middlewares/projectExistsAndItIsMine.middleware';

const projectsRoutes = Router();

projectsRoutes.get('/', isAuthenticatedMiddleware, projectsController);
projectsRoutes.put('/:id', isAuthenticatedMiddleware, projectExistsAndItIsMineMiddleware, editProjectController);
projectsRoutes.patch('/:id/done', isAuthenticatedMiddleware, projectExistsAndItIsMineMiddleware, doneProjectController);
projectsRoutes.delete('/:id', isAuthenticatedMiddleware, projectExistsAndItIsMineMiddleware, deleteProjectController);

export { projectsRoutes };
