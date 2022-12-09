import { NextFunction, Request, Response } from 'express';
import { MustBeLogged } from '../../../shared/utils/constants';
import { isAuthenticatedService } from '../service/isAuthenticated.service';

export const isAuthenticatedMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (isAuthenticatedService(req)) {
        next();
    } else {
        res.status(401).json({ error: MustBeLogged });
    }
}