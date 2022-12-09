import { Router } from 'express';
import { loginUserController } from "../controller/loginUser.controller";

const usersRoutes = Router();

usersRoutes.post('/', loginUserController);

export { usersRoutes };
