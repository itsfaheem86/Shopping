// import express from 'express';
// import userController from '@controllers/user';
// import {currentUser} from '@middlewares/current-user';
// import {requireAuth} from '@middlewares/require-auth';
// import {validateRequest} from '@middlewares/validate-request';
// import {body} from 'express-validator';

// const router = express.Router();

// router.get('/', currentUser, requireAuth, userController.listUsers);
// router.get('/:id', currentUser, requireAuth, userController.getUser);

// router.post(
//   '/',
//   currentUser,
//   requireAuth,
//   [
//     body('name').trim().notEmpty(),
//     body('email').isEmail(),
//     body('password').trim().notEmpty(),
//   ],
//   validateRequest,
//   userController.createUser,
// );

// router.put(
//   '/:id',
//   currentUser,
//   requireAuth,
//   [body('name').trim().notEmpty(), body('email').isEmail()],
//   validateRequest,
//   userController.editUser,
// );

// export default router;
