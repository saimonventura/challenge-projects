import { Router } from 'express';
import { isAuthenticatedMiddleware } from '../../user/middleware/isAuthenticated.middleware';

import { deleteProjectController } from "../controller/deleteProject.controller";
import { doneProjectController } from "../controller/doneProject.controller";
import { editProjectController } from "../controller/editProject.controller";
import { projectsController } from "../controller/projects.controller";
import { projectExistsAndItIsMineMiddleware } from '../middleware/projectExistsAndItIsMine.middleware';

const projectsRoutes = Router();

projectsRoutes.use(isAuthenticatedMiddleware)
projectsRoutes.use(projectExistsAndItIsMineMiddleware)

projectsRoutes.get('/', isAuthenticatedMiddleware, projectsController);
projectsRoutes.put('/:id', editProjectController);
projectsRoutes.patch('/:id/done', doneProjectController);
projectsRoutes.delete('/:id', deleteProjectController);

export { projectsRoutes };
