import { Router } from 'express';

import {
  projectController,
} from '../controller/project.controller';
import { createProjectController } from "../controller/createProject.controller";
import { isAuthenticatedMiddleware } from '../../user/middleware/isAuthenticated.middleware';

const projectRoutes = Router();

projectRoutes.use(isAuthenticatedMiddleware)
projectRoutes.post('/', createProjectController);
projectRoutes.get('/', projectController);

export { projectRoutes };
