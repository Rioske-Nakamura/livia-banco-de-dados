const express = require('express'); // Importa o módulo Express para criar o servidor
const { Client } = require('pg'); // Importa o módulo Client do pacote pg para conectar ao PostgreSQL
const path = require('path'); // Importa o módulo path para trabalhar com caminhos de arquivos
const app = express(); // Cria uma instância da aplicação Express
const port = 3000; // Define a porta em que o servidor irá escutar

// Cria uma nova instância do cliente PostgreSQL com as configurações de conexão
const client = new Client({
    host: "localhost", // Endereço do servidor PostgreSQL
    user: "postgres", // Nome do usuário do banco de dados
    port: 5432, // Porta padrão do PostgreSQL
    password: "2323", // Senha do usuário
    database: "postgres" // Nome do banco de dados a ser usado
});

// Conecta ao banco de dados PostgreSQL
client.connect();

// Servindo o arquivo HTML na rota raiz ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Envia o arquivo index.html como resposta
});

// Rota para obter dados dos estudantes
app.get('/estudantes', (req, res) => {
    // Realiza uma consulta SQL para selecionar todos os registros da tabela 'estudantes'
    client.query('SELECT * FROM estudantes', (err, result) => {
        if (err) {
            console.error(err.message); // Exibe mensagem de erro no console
            res.status(500).send('Erro ao consultar dados'); // Envia um status 500 em caso de erro
        } else {
            res.json(result.rows); // Envia os resultados da consulta como resposta JSON
        }
    });
});

// Inicializa o servidor para escutar na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // Exibe mensagem no console informando que o servidor está rodando
});
