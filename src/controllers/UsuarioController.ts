import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioController{

    async create(req: Request, res: Response){
        const {username, password, email} = req.body
        
        if (!username || !password || !email){
            return res.status(400).json({message: 'Error: Preencha todos os Campos.'})
        }
        try {
            const newUsuario = UsuarioRepository.create({username, password, email})
            await UsuarioRepository.save(newUsuario)
            console.log(newUsuario)
        } catch (error) {
            return res.status(500).json({message: 'Internal ServerError', error})
        }
    }

    async consulta(req: Request, res: Response){

    }
}