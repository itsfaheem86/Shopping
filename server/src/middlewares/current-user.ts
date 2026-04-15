// import jwt from 'jsonwebtoken';
// import {Request, Response, NextFunction} from 'express';
// import config from '@config/config';

// interface UserPayload {
//   id: string;
// }

// declare global {
//   namespace Express {
//     interface Request {
//       currentUser?: UserPayload;
//     }
//   }
// }

// export const currentUser = (req: Request, _: Response, next: NextFunction) => {
//   try {
//     const bearerToken = req.headers.authorization;
//     if (bearerToken) {
//       const payload = jwt.verify(
//         bearerToken?.split?.(' ')?.[1] || '',
//         config.jwtSecret,
//       ) as UserPayload;
//       req.currentUser = payload;
//     }
//   } catch (e) {
//     console.log(e);
//   } finally {
//     next();
//   }
// };
