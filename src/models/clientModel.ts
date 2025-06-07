import { dbConnection } from '../config/conect';

export async function listClients() {
    const conn = await dbConnection;
    const [rows] = await conn.query('SELECT * FROM tb_transacoes');
    return rows;
}

export async function getClientById(id: string) {
    const conn = await dbConnection;
    const [rows] = await conn.query<any[]>('SELECT * FROM tb_transacoes WHERE id_transferencia = ?', [id]);
    return rows[0] || null;
}

export async function insertClient(nomeCliente: string, valor: number, contaCliente: string) {
    const conn = await dbConnection;
    await conn.query(
        'INSERT INTO tb_transacoes (nomeCliente, valor, contaCliente) VALUES (?, ?, ?)',
        [nomeCliente, valor, contaCliente]
    );
}

export async function updateClient(id: string, nomeCliente: string, valor: number, contaCliente: string) {
    const conn = await dbConnection;
    await conn.query(
        'UPDATE tb_transacoes SET nomeCliente = ?, valor = ?, contaCliente = ? WHERE id_transferencia = ?',
        [nomeCliente, valor, contaCliente, id]
    );
}

export async function deleteClient(id: string) {
    const conn = await dbConnection;
    await conn.query('DELETE FROM tb_transacoes WHERE id_transferencia = ?', [id]);
}