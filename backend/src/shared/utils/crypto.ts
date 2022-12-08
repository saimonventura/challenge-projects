import jwt from 'jsonwebtoken';
import { createHash } from 'node:crypto';

const JWT_KEY = process.env.JWT_KEY ?? 'secret_key';

export const md5Hash = (value: string): string => {
  return createHash('md5').update(value).digest('hex');
};

export const jwtSign = (value: object): string => {
  return jwt.sign(value, JWT_KEY);
};

export const jwtVerify = (token: string): string | jwt.JwtPayload => {
  try {
    const decoded = jwt.verify(token, JWT_KEY);
    return decoded
  } catch (error) {
    return { error: 'Invalid token' }
  }
};
