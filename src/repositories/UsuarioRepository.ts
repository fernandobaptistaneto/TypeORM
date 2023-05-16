import { appDataSource } from "../data-source"
import { Usuario } from "../entities/Usuario"

export const UsuarioRepository = appDataSource.getRepository(Usuario)
