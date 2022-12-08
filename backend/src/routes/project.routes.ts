import { Router } from 'express';

import {
  createProjectController,
  projectController,
} from '../controllers/project.controller';
import { isAuthenticatedMiddleware } from '../middlewares/isAuthenticated.middleware';

const projectRoutes = Router();

projectRoutes.post('/', isAuthenticatedMiddleware, createProjectController);
projectRoutes.get('/', isAuthenticatedMiddleware, projectController);

export { projectRoutes };
