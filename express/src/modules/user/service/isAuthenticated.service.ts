import { user } from '@prisma/client';
import { Request } from 'express';
import { jwtVerify } from '../../../shared/utils/crypto';

export const isAuthenticatedService = (req: Request): boolean => {
    const token = String(req.headers.authorization).split('Bearer ')[1]
    const decodedToken = jwtVerify(token) as user

    if (decodedToken.username) {
        req.headers.username = decodedToken.username
        req.headers.name = decodedToken.name || ''
        req.headers.user_id = decodedToken.user_id
        return true
    }

    return false
}