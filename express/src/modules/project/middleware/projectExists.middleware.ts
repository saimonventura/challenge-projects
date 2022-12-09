import { NextFunction, Request, Response } from 'express';
import { ProjectNotFound } from '../../../shared/utils/constants';
import { projectByIdService } from "../service/projectById.service";

export const projectExistsMiddleware = async (req: Request & { project?: { username: string } }, res: Response, next: NextFunction) => {
    const project = await projectByIdService(req.params.id);

    if (!project) return res.status(404).json({ error: ProjectNotFound })

    req.project = project;

    next();
}