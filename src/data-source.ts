import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm"
import { Usuario } from './entities/Usuario'

const port = process.env.DB_PORT as number | undefined

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Usuario]
})
