import { Router } from 'express'
import { UsuarioController } from './controllers/UsuarioController'


const routes = Router()

export default routes

routes.post('/cadastrar_usuario', new UsuarioController().create)

