import { Request, Response } from 'express';
import { catchResponseMessage } from '../../../shared/utils/controller.error';
import { loginUserService } from "../service/loginUser.service";
import { getUserByUsernameService } from "../service/getUserByUsername.service";
import { createUserService } from "../service/createUser.service";
import { createUserValidate } from "../validation/createUser.validation";


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
    catchResponseMessage(message, res);
  }
};
