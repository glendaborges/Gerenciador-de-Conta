import { Request, RequestHandler, Response } from 'express';
import {
    listarClientesService,
    buscarClientePorIdService,
    criarClienteService,
    atualizarClienteService,
    deletarClienteService
} from '../services/clienteService';
import { clienteSchema } from "../validators/clienteValidator";
import { errorResponse, successResponse } from '../utils/apiResponse';

export async function listarClientesController(req: Request, res: Response) {
    try {
        const dados = await listarClientesService();
        res.json(successResponse(dados));
    } catch (erro) {
        console.error(erro);
        const errorMessage = (erro instanceof Error) ? erro.message : 'Erro ao buscar dados';
        res.status(500).json(errorResponse(errorMessage));
    }
}

export async function buscarClientePorIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json(errorResponse('ID do cliente é obrigatório'));
        }
        const dado = await buscarClientePorIdService(id);
        res.json(successResponse(dado));
    } catch (erro) {
        console.error(erro);
        const errorMessage = (erro instanceof Error) ? erro.message : 'Erro ao buscar dados por id';
        res.status(500).json(errorResponse(errorMessage));
     ;
    }
}

export const criarClienteController: RequestHandler = async (req, res) => {
       try {
        const parseResult = clienteSchema.safeParse(req.body);
        if (!parseResult.success) {
         res.status(400).json(errorResponse("Erro de validação", parseResult.error.errors));
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        await criarClienteService(nomeCliente, valor, contaCliente);
        res.json( res.json(successResponse({ status: 'Cliente criado com sucesso' })));
    } catch (erro) {
        console.error(erro);
        const errorMessage = (erro instanceof Error) ? erro.message : "Erro ao criar cliente";
        res.status(500).json(errorResponse(errorMessage));
    }
};

export const atualizarClienteController: RequestHandler = async (req, res) => {
    try {
        const parseResult = clienteSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json(errorResponse("Erro de validação", parseResult.error.errors));
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        const { id } = req.params;
        if (!id) {
         res.status(400).json(errorResponse('ID do cliente é obrigatório'));
         return
        }
        await atualizarClienteService(id, nomeCliente, valor, contaCliente);
        res.json(successResponse({ status: 'Cliente atualizado com sucesso!' }));
    } catch (erro) {
        console.error(erro);
        const errorMessage = (erro instanceof Error) ? erro.message : 'Erro ao atualizar cliente';
        res.status(500).json(errorResponse(errorMessage));
     
    }
};



export async function deletarClienteController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json(errorResponse('ID do cliente é obrigatório'));
        }
        await deletarClienteService(id);
        res.json({ status: 'Cliente excluído com sucesso!' });
    } catch (erro) {
        console.error(erro);
        const errorMessage = (erro instanceof Error) ? erro.message :  'Erro ao excluir cliente';
        res.status(500).json(errorResponse(errorMessage));
 
    }
}
