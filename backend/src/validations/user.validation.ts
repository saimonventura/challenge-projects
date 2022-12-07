import { Request, Response } from 'express';
import { BadRequest, WeakPassword } from '../utils/constants';


export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const createUserValidate = (req: Request, res: Response) => {
  if (!req.body.username?.trim?.() || !req.body.password?.trim?.()) {
    res.status(400).json({ error: BadRequest });
    throw new Error(BadRequest);
  }

  if (!req.body.password.match(passwordPattern)) {
    res.status(400).json({ error: WeakPassword });
    throw new Error(WeakPassword);
  }
};
