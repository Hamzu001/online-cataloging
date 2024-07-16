import { Router } from 'express'
import { createNewUser, deleteUser, getUserDetail, loginUser, verifyUser } from '../controllers/user.controller.js'

const router = Router()

router.route('/create-new-user').post(createNewUser)
router.route('/get-user-detail').get(getUserDetail)
router.route('/verify-user/:id').get(verifyUser)
router.route('/login-user').post(loginUser)
router.route('/delete-user/:id').delete(deleteUser)

export default router