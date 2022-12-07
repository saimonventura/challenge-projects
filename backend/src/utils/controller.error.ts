import { Response } from 'express';

export const catchResponseMessage = (message: unknown, res: Response) => {
    if (res.statusCode < 400) res.status(500);
    res.json({ error: message });
}

