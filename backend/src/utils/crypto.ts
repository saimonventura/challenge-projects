import { createHash } from 'node:crypto';
import jwt from 'jsonwebtoken';

const JWT_KEY = process.env.JWT_KEY ?? 'secret_key';

export const md5Hash = (value: string): string => {
  return createHash('md5').update(value).digest('hex');
};

export const jwtSign = (value: object): string => {
  return jwt.sign(value, JWT_KEY);
};

export const jwtVerify = (token: string): string | jwt.JwtPayload => {
  return jwt.verify(token, JWT_KEY);
};
