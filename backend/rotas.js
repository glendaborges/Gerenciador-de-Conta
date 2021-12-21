
const rotas = require('express').Router()
const conexao = require('./config/conect')

rotas.get('/', (req, res) =>{
    let sql = 'select * from tb_transacoes'

    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json(rows)
    })
})

rotas.get('/:id', (req, res) =>{
    // atribui o obj id o id passado na url 
    const {id} = req.params
    // seleciona todos os campos  da tabela  tb_tarefas, onde o id_tarefa é igual  
    let sql = 'select * from tb_transacoes where id_transferencia = ?' 
    // executa o comando, sustituindo a "?" pelo o id buscado la na url
    conexao.query(sql, [id], (erro, rows, fields) =>{
        if(erro)throw erro
        res.json(rows[0])
    })
})

//rota para deletar uma tarefa especifica através do seu id
rotas.delete('/:id', (req, res) =>{
    const {id} = req.params
    let sql = `delete from tb_transacoes where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json({status:'transação  excluída com sucesso'})
    })
})

// rota para incluir
rotas.post('/', (req, res) =>{
    // o conteudo do objeto vem lá do body
    const {nomeCliente,valor,contaCliente} = req.body
    // comando de inclusão 
    let sql = `insert into tb_transacoes(nomeCliente,valor,contaCliente) values('${nomeCliente}','${valor}','${contaCliente}')`
    // executa o comando
    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json({status:"transação  feita com sucesso"})
    })
})

// rotina de update
rotas.put('/:id', (req, res) =>{
    const {id} = req.params
    // requisição para pegar la do body os values desses atributos
    const{nomeCliente,valor,contaCliente} = req.body
    // comando para fazer o update dos valores que estão na tabela, atualizando para o que foi definido no body
    let sql = `update tb_transacoes set 
    nomeCliente = '${nomeCliente}', 
    valor = '${valor}',
    contaCliente = '${contaCliente}'
    where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json({status:"transação editada com sucesso"})
    })
})





module.exports = rotas