CREATE TABLE estudantes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    idade INT,
    turma VARCHAR(10),
    media DECIMAL(4, 2)
);


INSERT INTO estudantes (nome, idade, turma, media) VALUES 
('Alice Silva', 14, '9A', 8.5),
('Bruno Costa', 15, '9B', 7.9),
('Carla Souza', 14, '9A', 9.2),
('Diego Martins', 16, '9C', 6.8),
('Elisa Lima', 15, '9B', 8.7),
('Felipe Santos', 14, '9A', 7.3),
('Gabriel Rocha', 15, '9C', 8.1),
('Helena Mendes', 16, '9B', 9.5),
('Isabela Nunes', 14, '9A', 7.0),
('João Almeida', 15, '9C', 8.4);

SELECT *FROM estudantes