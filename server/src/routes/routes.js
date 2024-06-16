import { Router } from 'express'
import * as controller from '../controllers/usuarios.js'

const router = Router()
router.route('/usuarios').get(controller.getCredenciales).post(controller.postNuevoUsuario)
router.route('/login').post(controller.getCredenciales)

export default router
