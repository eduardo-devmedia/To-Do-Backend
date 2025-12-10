Para criar a tabela no Supabase, você pode acessar o *SQL Editor* (localizado no menu lateral do supabase) e utilizar o comando abaixo: 

```
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
```
