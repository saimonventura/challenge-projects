import { Router } from 'express';
import { isAuthenticatedMiddleware } from '../../user/middleware/isAuthenticated.middleware';

import { deleteProjectController } from "../controller/deleteProject.controller";
import { doneProjectController } from "../controller/doneProject.controller";
import { editProjectController } from "../controller/editProject.controller";
import { projectsController } from "../controller/projects.controller";
import { isMineMiddleware } from '../middleware/IsMine.middleware';
import { projectExistsMiddleware } from '../middleware/projectExists.middleware';

const projectsRoutes = Router();

projectsRoutes.use(isAuthenticatedMiddleware)
projectsRoutes.get('/', projectsController);

projectsRoutes.use('/:id', projectExistsMiddleware, isMineMiddleware)
projectsRoutes.put('/:id', editProjectController);
projectsRoutes.delete('/:id', deleteProjectController);
projectsRoutes.patch('/:id/done', doneProjectController);

export { projectsRoutes };
