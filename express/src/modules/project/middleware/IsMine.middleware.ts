import { NextFunction, Request, Response } from 'express';
import { Unauthorized } from '../../../shared/utils/constants';

export const isMineMiddleware = async (req: Request & { project?: { username: string } }, res: Response, next: NextFunction) => {
    if (req.project?.username !== req.headers.username) {
        res.statusMessage = Unauthorized;
        return res.status(401).json({ error: Unauthorized })
    }

    next();
}