import { Router } from 'express'
import * as controller from '../controllers/usuarios.js'
import { authMiddleware } from '../middleware/middleware_verify.js'

const router = Router()
router.route('/usuarios').get(authMiddleware, controller.getDatos).post(controller.postNuevoUsuario)
router.route('/login').post(controller.getCredenciales)

export default router
