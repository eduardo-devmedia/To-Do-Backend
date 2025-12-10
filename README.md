# Download do NodeJS
Baixe o NodeJS em: https://nodejs.org/pt
# Comando para instalar todos os plugins listados em package.json
```
npm install
```
# Comando para executar o projeto na sua máquina
```
node index.js
```
# Criando a tabela no banco de dados
Para criar a tabela no Supabase, você pode acessar o *SQL Editor* (localizado no menu lateral do supabase) e utilizar o comando abaixo: 
```
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
```
