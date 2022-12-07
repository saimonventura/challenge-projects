import { user } from '@prisma/client';
import { Request } from 'express';
import { jwtVerify } from '../utils/crypto';

export const isAuthenticatedService = (req: Request): boolean => {
    const token = String(req.headers.token)
    const decodedToken = jwtVerify(token) as user

    if (decodedToken.username) {
        req.headers.username = decodedToken.username
        req.headers.name = decodedToken.name || ''
        req.headers.id = decodedToken.id
        return true
    }

    return false
}