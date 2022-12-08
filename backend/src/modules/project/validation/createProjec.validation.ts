import { Request, Response } from 'express';
import { BadRequest } from '../../../shared/utils/constants';


export const createProjectValidate = (req: Request, res: Response) => {
  if (!req.body.title?.trim?.()) {
    res.status(400).statusMessage = BadRequest;
    throw new Error('title is a required field');
  }

  if (!req.body.zip_code?.trim?.()) {
    res.status(400).statusMessage = BadRequest;
    throw new Error('zip_code is a required field');
  }

  if (!req.body.deadline?.trim?.()) {
    res.status(400).statusMessage = BadRequest;
    throw new Error('deadline is a required field');
  }

  if (!req.body.cost) {
    res.status(400).statusMessage = BadRequest;
    throw new Error('cost is a required field');
  }
};
