import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app  = express()
app.use(express.json())
// Configurar CORS para permitir qualquer origem e métodos como POST
app.use(cors({
    origin: '*', // Permite todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite esses métodos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

/**ROTA PARA LISTAR USUARIO */
app.get('/usuarios', async (req, res) =>{
    const users = await prisma.user.findMany()
    
    res.status(200).json(users)
})

/**ROTA PARA CRIAR USUARIO */
app.post('/usuarios', async (req, res) =>{
    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

/**ROTA PARA EDITAR USUARIO */
app.put('/usuarios/:id', async (req, res) =>{
    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

/**ROTA PARA DELETAR USUARIO */
app.delete('/usuarios/:id', async (req, res) =>{
    await prisma.user.delete({
        where:{
            id: req.params.id,
        },
    })
    res.status(200).json({message: 'Usuário Deletado com sucesso!'})
})

app.listen(3000)

/**
 * CRIAR API DE USUARIOS
 * - LISTAR TODOS OS USUARIOS
 * - CRIAR UM USUARIO
 * - EDITAR UM USUARIO
 * - DELETAR UM USUARIO
 * 
 * CREDENTIALS
 * USER: jonas
 * PASS: TWmqTfBzI0xRHLjv
 */