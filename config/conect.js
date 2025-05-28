require('dotenv').config()
// variável para instanciar  pacote do mysql
const mysql = require('mysql')
// configurando a conexão
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.DB_PASS,
    port: 3306,
    database: 'db_banco'
})

conexao.connect((erro) =>{
    if(erro)throw erro
    console.log('Estamos conectados com a base de dados')
})

module.exports = conexao