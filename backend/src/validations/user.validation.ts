import { Request, Response } from 'express';

import { BadRequest, WeakPassword } from '../utils/constants';

export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const createUserValidate = (req: Request, res: Response) => {
  if (!req.body.username?.trim?.()) {
    res.status(400).statusMessage = BadRequest;
    throw new Error('username is a required field');
  }

  if (!req.body.password?.trim?.()) {
    res.status(400).statusMessage = BadRequest;
    throw new Error('password is a required field');
  }

  if (!req.body.password.match(passwordPattern)) {
    res.status(400).statusMessage = WeakPassword
    throw new Error(WeakPassword);
  }
};
