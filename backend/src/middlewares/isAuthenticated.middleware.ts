import { NextFunction, Request, Response } from 'express';
import { isAuthenticatedService } from '../services/isAuthenticated.service';
import { MustBeLogged } from '../utils/constants';

export const isAuthenticatedMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (isAuthenticatedService(req)) {
        next();
    } else {
        res.status(401).json({ error: MustBeLogged });
    }
}