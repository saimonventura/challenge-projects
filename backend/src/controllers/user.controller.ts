import { Request, Response } from 'express';

import {
  createUserService,
  getUserByUsernameService,
  loginUserService,
} from '../services/user.service';
import { catchResponseMessage } from '../utils/controller.error';
import { createUserValidate } from '../validations/user.validation';

export const loginUserController = async (req: Request, res: Response) => {
  try {
    createUserValidate(req, res);

    const user = await getUserByUsernameService(req);

    if (user != null) {
      return await loginUserService(req, res, user);
    }

    const createdUser = await createUserService(req);

    res.status(201).json(createdUser);
  } catch ({ message }) {
    catchResponseMessage(message, res)
  }
};
