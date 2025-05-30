import { Request, Response } from 'express';
import {
    listarClientesService,
    buscarClientePorIdService,
    criarClienteService,
    atualizarClienteService,
    deletarClienteService
} from '../services/clienteService';

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

export async function criarClienteController(req: Request, res: Response) {
    try {
        const { nomeCliente, valor, contaCliente } = req.body;
        await criarClienteService(nomeCliente, valor, contaCliente);
        res.json({ status: 'Cliente criado com sucesso' });
    } catch (erro: any) {
        console.error(erro);
        res.status(500).json({ error: erro.message || 'Erro ao efetuar transação' });
    }
}

export async function atualizarClienteController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { nomeCliente, valor, contaCliente } = req.body;
        await atualizarClienteService(id, nomeCliente, valor, contaCliente);
        res.json({ status: 'Cliente atualizado com sucesso!' });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ error: 'Erro ao efetuar transação' });
    }
}

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
