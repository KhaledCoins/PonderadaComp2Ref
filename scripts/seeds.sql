-- Usuários
INSERT INTO users (name, email, password) VALUES
  ('Alice', 'alice@example.com', 'senha1'),
  ('Bob', 'bob@example.com', 'senha2');

-- Categorias
INSERT INTO categories (name, priority) VALUES
  ('Trabalho', 1),
  ('Pessoal', 2);

-- Origens
INSERT INTO origins (name, relevance) VALUES
  ('Email', 1),
  ('Telefone', 2);

-- Tarefas
INSERT INTO tasks (title, description, status, desired_date, deadline, importance, progress, user_id, category_id, origin_id)
SELECT 'Preparar relatório', 'Relatório mensal', 'pendente', CURRENT_DATE, CURRENT_DATE + INTERVAL '7 days', 5, 0, u.id, c.id, o.id
FROM users u
JOIN categories c ON c.name = 'Trabalho'
JOIN origins o ON o.name = 'Email'
LIMIT 1;

INSERT INTO tasks (title, description, status, desired_date, deadline, importance, progress, user_id, category_id, origin_id)
SELECT 'Comprar presentes', 'Presentes de aniversário', 'em andamento', CURRENT_DATE, CURRENT_DATE + INTERVAL '14 days', 3, 20, u.id, c.id, o.id
FROM users u
JOIN categories c ON c.name = 'Pessoal'
JOIN origins o ON o.name = 'Telefone'
LIMIT 1; 