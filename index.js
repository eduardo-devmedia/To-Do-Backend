import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors';
import express from 'express';
import {
    CreateTodo,
    DeleteTodo,
    ReadTodo,
    ReadTodos,
    UpdateTodoTitle,
    UpdateTodoStatus
} from "./database/crud.js";

const app = express();
const port = process.env.NODE_PORT;

app.use(cors());
app.use(express.json());

app.get('/todos', async (req, res) => {
    const Todos = await ReadTodos();
    res.json(Todos);
})

app.get('/todos/:id', async (req, res) => {
    const Todo = await ReadTodo(req.params.id);
    res.json(Todo[0]);
})

app.post('/todos', async (req, res) => {
    const resposta = await CreateTodo(req.body.title, false);
    res.json(resposta);
});

app.patch('/todos/:id', async (req, res) => {
    const resposta = await UpdateTodoTitle(req.params.id, req.body.title);
    res.json(resposta);
});

app.patch('/todos/status/:id', async (req, res) => {
    const resposta = await UpdateTodoStatus(req.params.id, req.body.completed);
    res.json(resposta);
});

app.delete('/todos/:id', async (req, res) => {
    const resposta = await DeleteTodo(req.params.id);
    res.json(resposta);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
