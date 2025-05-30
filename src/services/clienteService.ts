import {
    listarClientes,
    buscarClientePorId,
    inserirCliente,
    atualizarCliente,
    deletarCliente,
} from '../models/clienteModel';

export async function listarClientesService() {
    return await listarClientes();
}

export async function buscarClientePorIdService(id: string) {
    return await buscarClientePorId(id);
}

export async function criarClienteService(nomeCliente: string, valor: number, contaCliente: string) {
    if (!nomeCliente || !contaCliente || isNaN(valor)) {
        throw new Error("Dados inválidos para a transação");
    }
    await inserirCliente(nomeCliente, valor, contaCliente);
}

export async function atualizarClienteService(id: string, nomeCliente: string, valor: number, contaCliente: string) {
    await atualizarCliente(id, nomeCliente, valor, contaCliente);
}

export async function deletarClienteService(id: string) {
    await deletarCliente(id);
}
