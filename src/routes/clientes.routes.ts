import express from 'express';
import {
    listClientsController,
    getClientByIdController,
    createClientController,
    updateClientController,
    deleteClientController
} from '../controllers/clientesController';

const rotas = express.Router();

rotas.get('/', listClientsController);
rotas.get('/:id', getClientByIdController);
rotas.post('/', createClientController);
rotas.put('/:id', updateClientController);
rotas.delete('/:id', deleteClientController);

export default rotas;
