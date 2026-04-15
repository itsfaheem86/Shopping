// import {Request, Response, NextFunction} from 'express';
// import {userRepository} from '@db/data-source';

// export const requireRole = (allowedRoles: string[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userId = req.currentUser?.id;
//       if (!userId) {
//         res.status(401).json({msg: 'User not authenticated'});
//         return;
//       }

//       const user = await userRepository.findOne({
//         where: {id: userId},
//       });

//       if (!user) {
//         res.status(401).json({msg: 'User not found'});
//         return;
//       }

//       if (!allowedRoles.includes(user.role)) {
//         res.status(403).json({msg: 'Insufficient permissions'});
//         return;
//       }

//       next();
//     } catch (error) {
//       res.status(500).json({msg: 'Internal server error'});
//     }
//   };
// };
