import { projectByIdService } from "../services/project.service";
import { NextFunction, Request, Response } from 'express';
import { ProjectNotFound, Unauthorized } from "../utils/constants";

export const projectExistsAndItIsMineMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const project = await projectByIdService(req.params.id);

    if (!project) return res.status(404).json({ error: ProjectNotFound })

    if (project.username !== req.headers.username) {
        res.statusMessage = Unauthorized;
        return res.status(401).json({ error: Unauthorized })
    }

    next();
}