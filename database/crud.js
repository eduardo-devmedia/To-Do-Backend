import dotenv from 'dotenv'
dotenv.config()

import postgres from 'postgres'

const sql = postgres({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: Number(process.env.DATABASE_PORT),
});

export async function CreateTodo(title, completed){
    try{
        await sql`INSERT into todos (title, completed) values (${ title }, ${ completed })`
        return 'To-do criada com sucesso!';
    } catch {
        return 'Erro ao criar To-do!';
    }
}

export async function ReadTodos() {
    return sql `SELECT id, title, completed from todos order by created_at ASC`;
}

export async function ReadTodo(id) {
    return sql `SELECT id, title, completed from todos WHERE id = ${id}`;
}

export async function UpdateTodoStatus(id, completed){
    try{
        await sql`UPDATE todos set completed = ${ completed } WHERE id = ${ id }`
        return 'To-do concluída!';
    } catch {
        return 'Erro ao concluir To-do!';
    }

}

export async function UpdateTodoTitle(id, title){
    try{
        await sql`UPDATE todos set title = ${ title } WHERE id = ${ id }`
        return 'To-do atualizada com sucesso!';
    } catch {
        return 'Erro ao atualizar To-do!';
    }

}

export async function DeleteTodo(id){
    try {
        await sql`DELETE from todos WHERE id = ${ id }`
        return 'To-do excluída com sucesso!';
    } catch {
        return 'Erro ao excluir To-do!';
    }
}