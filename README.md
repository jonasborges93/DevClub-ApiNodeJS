
# API Node Usuários - DevClub

API criada para aplicar os conhecimentos do vídeo do canal DevClub. 

Link do Vídeo: https://www.youtube.com/watch?v=PyrMT0GA3sE


## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- Express
- Prisma ORM
- Mongo DB
## Documentação da API

#### ROTA PARA LISTAR USUÁRIOS

```http
  GET /usuarios
```

#### ROTA PARA CRIAR USUARIO

```http
  POST /usuarios
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O e-mail é um valor único|
| `name`      | `string` |  O parametro é uma string|
| `age`      | `int` | O parametro é um número|

#### ROTA PARA EDITAR USUARIO

```http
  PUT /usuarios/:id
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. É necessário enviar o ID na URL|

#### ROTA PARA DELETAR USUARIO

```http
  delete /usuarios/:id
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. É necessário enviar o ID na URL|




## Me encontre nas redes

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonasborges93/)](https://www.linkedin.com/in/jonasborges93/)
[![Gmail Badge](https://img.shields.io/badge/-jonas.bgs93@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonas.bgs93@gmail.com)](mailto:jonas.bgs93@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-purple?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/jonas.borges93/)](https://www.instagram.com/jonasborges.dev)