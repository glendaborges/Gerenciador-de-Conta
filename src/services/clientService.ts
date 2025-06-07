import {
    listClients,
    getClientById,
    insertClient,
    updateClient,
    deleteClient,
} from '../models/clientModel';

export async function listClientsService() {
    return await listClients();
}

export async function getClientByIdService(id: string) {
    return await getClientById(id);
}

export async function createClientService(nomeCliente: string, valor: number, contaCliente: string) {
    if (!nomeCliente || !contaCliente || isNaN(valor)) {
        throw new Error("Dados inválidos para a transação");
    }
    await insertClient(nomeCliente, valor, contaCliente);
}

export async function updateClientService(id: string, nomeCliente: string, valor: number, contaCliente: string) {
    await updateClient(id, nomeCliente, valor, contaCliente);
}

export async function deleteClientService(id: string) {
    await deleteClient(id);
}
