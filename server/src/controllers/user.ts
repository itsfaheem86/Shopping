// import {Request, Response, NextFunction} from 'express';
// import {ILike} from 'typeorm';
// import bcrypt from 'bcrypt';
// import {userRepository} from '@db/data-source';
// import {PaginatedResponse} from '../types/pagination';
// import {createPaginatedResponse, getPageRequest} from '../utils/pagination';
// import {User} from '@entities/user';
// import {
//   CreateUserRequestBody,
//   UpdateUserRequestBody,
// } from './dto/user-req.body';

// const listUsers = async (
//   req: Request,
//   res: Response<PaginatedResponse<User>>,
//   next: NextFunction,
// ) => {
//   const {page, itemsPerPage, skipItems, searchKey} = getPageRequest(req);
//   const currentUserId = req.currentUser!.id;

//   const currentUser = await userRepository.findOne({
//     where: {id: currentUserId},
//     relations: ['shop', 'ownedShops'],
//   });

//   if (!currentUser) {
//     return next({status: 404, error: {msg: 'User not found'}});
//   }

//   if (currentUser.role === 'super_admin') {
//     const [users, totalUsers] = await userRepository.findAndCount({
//       skip: skipItems,
//       take: itemsPerPage,
//       order: {updatedAt: 'desc'},
//       where: [
//         {role: 'admin', name: ILike(`%${searchKey}%`)},
//         {role: 'admin', email: ILike(`%${searchKey}%`)},
//       ],
//     });
//     return res.status(200).json(
//       createPaginatedResponse({
//         items: users,
//         page,
//         itemsPerPage,
//         totalItems: totalUsers,
//       }),
//     );
//   }

//   if (currentUser.role === 'admin') {
//     const shopId = currentUser.shopId || currentUser.ownedShops[0].id;
//     const [users, totalUsers] = await userRepository.findAndCount({
//       skip: skipItems,
//       take: itemsPerPage,
//       order: {updatedAt: 'desc'},
//       where: [
//         {role: 'staff', shopId, name: ILike(`%${searchKey}%`)},
//         {role: 'staff', shopId, email: ILike(`%${searchKey}%`)},
//       ],
//     });
//     return res.status(200).json(
//       createPaginatedResponse({
//         items: users,
//         page,
//         itemsPerPage,
//         totalItems: totalUsers,
//       }),
//     );
//   }

//   return next({status: 403, error: {msg: 'Forbidden'}});
// };

// const getUser = async (
//   req: Request<{id: string}, unknown, unknown>,
//   res: Response<User>,
//   next: NextFunction,
// ) => {
//   const currentUserId = req.currentUser!.id;
//   const currentUser = await userRepository.findOne({
//     where: {id: currentUserId},
//     relations: ['shop', 'ownedShops'],
//   });

//   if (!currentUser) {
//     return next({status: 404, error: {msg: 'User not found'}});
//   }

//   if (currentUser.role === 'super_admin') {
//     const user = await userRepository.findOne({
//       where: {id: req.params.id, role: 'admin'},
//     });
//     if (!user) return next({status: 404, error: {msg: 'User not found'}});
//     return res.status(200).json(user);
//   }

//   if (currentUser.role === 'admin') {
//     const shopId = currentUser.shopId || currentUser.ownedShops[0].id;
//     const user = await userRepository.findOne({
//       where: {id: req.params.id, role: 'staff', shopId},
//     });
//     if (!user) return next({status: 404, error: {msg: 'User not found'}});
//     return res.status(200).json(user);
//   }

//   return next({status: 403, error: {msg: 'Forbidden'}});
// };

// const createUser = async (
//   req: Request<unknown, unknown, CreateUserRequestBody>,
//   res: Response<User>,
//   next: NextFunction,
// ) => {
//   const currentUserId = req.currentUser!.id;
//   const currentUser = await userRepository.findOne({
//     where: {id: currentUserId},
//     relations: ['shop', 'ownedShops'],
//   });

//   if (!currentUser) {
//     return next({status: 404, error: {msg: 'User not found'}});
//   }

//   const {name, email, password} = req.body;

//   if (!password) {
//     return next({status: 400, error: {msg: 'Password is required'}});
//   }

//   const existingUser = await userRepository.findOne({where: {email}});
//   if (existingUser) {
//     return next({status: 409, error: {msg: 'Email already exists'}});
//   }

//   const hashedPassword = await bcrypt.hash(password, 12);

//   if (currentUser.role === 'super_admin') {
//     const newUser = await userRepository.save(
//       userRepository.create({
//         name,
//         email,
//         password: hashedPassword,
//         role: 'admin',
//         createdById: currentUser.id,
//       }),
//     );
//     return res.status(200).json(newUser);
//   }

//   if (currentUser.role === 'admin') {
//     const shopId = currentUser.shopId || currentUser.ownedShops[0].id;
//     const newUser = await userRepository.save(
//       userRepository.create({
//         name,
//         email,
//         password: hashedPassword,
//         role: 'staff',
//         shopId,
//       }),
//     );
//     return res.status(200).json(newUser);
//   }

//   return next({status: 403, error: {msg: 'Forbidden'}});
// };

// const editUser = async (
//   req: Request<{id: string}, unknown, UpdateUserRequestBody>,
//   res: Response<User>,
//   next: NextFunction,
// ) => {
//   const currentUserId = req.currentUser!.id;
//   const currentUser = await userRepository.findOne({
//     where: {id: currentUserId},
//     relations: ['shop', 'ownedShops'],
//   });

//   if (!currentUser) {
//     return next({status: 404, error: {msg: 'User not found'}});
//   }

//   const {name, email, password} = req.body;

//   const emailOwner = await userRepository.findOne({where: {email}});
//   if (emailOwner && emailOwner.id !== req.params.id) {
//     return next({status: 409, error: {msg: 'Email already exists'}});
//   }

//   let targetUser: User | null = null;

//   if (currentUser.role === 'super_admin') {
//     targetUser = await userRepository.findOne({
//       where: {id: req.params.id, role: 'admin'},
//     });
//     if (!targetUser) {
//       return next({status: 404, error: {msg: 'User not found'}});
//     }
//   } else if (currentUser.role === 'admin') {
//     const shopId = currentUser.shopId || currentUser.ownedShops[0].id;
//     targetUser = await userRepository.findOne({
//       where: {id: req.params.id, role: 'staff', shopId},
//     });
//     if (!targetUser) {
//       return next({status: 404, error: {msg: 'User not found'}});
//     }
//   } else {
//     return next({status: 403, error: {msg: 'Forbidden'}});
//   }

//   const updatePayload: Partial<User> = {
//     name,
//     email,
//   };

//   if (currentUser.role === 'super_admin') {
//     updatePayload.role = 'admin';
//   }

//   if (currentUser.role === 'admin') {
//     updatePayload.role = 'staff';
//     updatePayload.shopId = targetUser.shopId;
//   }

//   if (password) {
//     updatePayload.password = await bcrypt.hash(password, 12);
//   }

//   await userRepository.update({id: targetUser.id}, updatePayload);

//   const updatedUser = await userRepository.findOneByOrFail({id: targetUser.id});
//   return res.status(201).json(updatedUser);
// };

// export default {
//   listUsers,
//   getUser,
//   createUser,
//   editUser,
// };
