import express from 'express';
import {
    listarClientesController,
    buscarClientePorIdController,
    criarClienteController,
    atualizarClienteController,
    deletarClienteController
} from '../controllers/clientesController';

const rotas = express.Router();

rotas.get('/', listarClientesController);
rotas.get('/:id', buscarClientePorIdController);
rotas.post('/', criarClienteController);
rotas.put('/:id', atualizarClienteController);
rotas.delete('/:id', deletarClienteController);

export default rotas;
