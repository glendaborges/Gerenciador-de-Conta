import { Request, RequestHandler, Response } from 'express';
import {
    listarClientesService,
    buscarClientePorIdService,
    criarClienteService,
    atualizarClienteService,
    deletarClienteService
} from '../services/clienteService';
import { clienteSchema } from "../validators/clienteValidator";

export async function listarClientesController(req: Request, res: Response) {
    try {
        const dados = await listarClientesService();
        res.json(dados);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
}

export async function buscarClientePorIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const dado = await buscarClientePorIdService(id);
        res.json(dado);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ error: 'Erro ao buscar dados por id' });
    }
}

export const criarClienteController: RequestHandler = async (req, res) => {
       try {
        const parseResult = clienteSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({ error: parseResult.error.errors });
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        await criarClienteService(nomeCliente, valor, contaCliente);
        res.json({ status: 'Cliente criado com sucesso' });
    } catch (erro: any) {
        console.error(erro);
        res.status(500).json({ error: erro.message || 'Erro ao efetuar transação' });
    }
};

export const atualizarClienteController: RequestHandler = async (req, res) => {
    try {
        const parseResult = clienteSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({ error: parseResult.error.errors });
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        const { id } = req.params;
        await atualizarClienteService(id, nomeCliente, valor, contaCliente);
        res.json({ status: 'Cliente atualizado com sucesso!' });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ error: 'Erro ao efetuar transação' });
    }
};



export async function deletarClienteController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await deletarClienteService(id);
        res.json({ status: 'Cliente excluído com sucesso!' });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ error: 'Erro ao efetuar transação' });
    }
}
