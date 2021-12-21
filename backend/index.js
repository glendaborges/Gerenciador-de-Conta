require('./config/conect')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const rotasTransacoes = require('./rotas')

app.use('/conta', rotasTransacoes)

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})