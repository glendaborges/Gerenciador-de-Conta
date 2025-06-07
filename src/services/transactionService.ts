import {
    listTransactions,
    getTransactionById,
    insertTransaction,
    updateTransaction,
    deleteTransaction,
} from '../models/transactionModel';

export async function listTransactionsService() {
    return await listTransactions();
}

export async function getTransactionByIdService(id: string) {
    return await getTransactionById(id);
}

export async function createTransactionService(nomeCliente: string, valor: number, contaCliente: string) {
    if (!nomeCliente || !contaCliente || isNaN(valor)) {
        throw new Error("Dados inválidos para a transação");
    }
    await insertTransaction(nomeCliente, valor, contaCliente);
}

export async function updateTransactionService(id: string, nomeCliente: string, valor: number, contaCliente: string) {
    await updateTransaction(id, nomeCliente, valor, contaCliente);
}

export async function deleteTransactionService(id: string) {
    await deleteTransaction(id);
}
