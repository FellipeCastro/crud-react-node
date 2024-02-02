const mysql = require('mysql')
const cors = require('cors')
const express = require('express')
const app = express()

const port = 8800

app.use(express.json())
app.use(cors())

// Conexão com MySQL
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'crud'
})

conexao.connect()

// Rotas

// Listar Usuários
app.get('/', (req, res) => {
    const query = 'SELECT * FROM usuarios'

    conexao.query(query, (err, result) => {
        if (err) {
            console.log(`Erro ao consultar od dados do banco: ${err}`)
            return res.status(500).json({error: 'Erro interno do servidor'})
        } else {
            return res.json(result)
        }
    })
})

// Novo Usuário
app.post('/', (req, res) => {
    const { nome, email, fone, data_nascimento } = req.body

    const query = 'INSERT INTO usuarios (nome, email, fone, data_nascimento) VALUES (? ,?, ?, ?)'
    conexao.query(query, [nome, email, fone, data_nascimento], (err, result) => {
        if (err) {
            console.log(`Erro ao adicionar usuário: ${err}`)
            return res.status(500).json({error: 'Erro interno do servidor'})
        } else {
            return res.status(200).json()
        }
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})