import { Router } from 'express'
import { UsuarioController } from './controllers/UsuarioController'


const routes = Router()

export default routes

routes.post('/cadastrar_usuario', new UsuarioController().create)

routes.get('/listar_usuarios', new UsuarioController().index)

routes.get('/listar_usuarios/:id_usuario', new UsuarioController().indexId)
