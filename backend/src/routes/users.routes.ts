import { Router } from 'express';

import { loginUserController } from '../controllers/user.controller';

const usersRoutes = Router();

usersRoutes.post('/', loginUserController);

export { usersRoutes };
