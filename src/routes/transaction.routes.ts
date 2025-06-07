import express from 'express';
import {
    listTransactionsController,
    getTransactionByIdController,
    createTransactionController,
    updateTransactionController,
    deleteTransactionController
} from '../controllers/transactionsController';

const rotas = express.Router();

rotas.get('/', listTransactionsController);
rotas.get('/:id', getTransactionByIdController);
rotas.post('/', createTransactionController);
rotas.put('/:id', updateTransactionController);
rotas.delete('/:id', deleteTransactionController);

export default rotas;
