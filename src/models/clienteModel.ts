import { conexao } from '../config/conect';

export async function listarClientes() {
    const conn = await conexao;
    const [rows] = await conn.query('SELECT * FROM tb_transacoes');
    return rows;
}

export async function buscarClientePorId(id: string) {
    const conn = await conexao;
    const [rows] = await conn.query<any[]>('SELECT * FROM tb_transacoes WHERE id_transferencia = ?', [id]);
    return rows[0] || null;
}

export async function inserirCliente(nomeCliente: string, valor: number, contaCliente: string) {
    const conn = await conexao;
    await conn.query(
        'INSERT INTO tb_transacoes (nomeCliente, valor, contaCliente) VALUES (?, ?, ?)',
        [nomeCliente, valor, contaCliente]
    );
}

export async function atualizarCliente(id: string, nomeCliente: string, valor: number, contaCliente: string) {
    const conn = await conexao;
    await conn.query(
        'UPDATE tb_transacoes SET nomeCliente = ?, valor = ?, contaCliente = ? WHERE id_transferencia = ?',
        [nomeCliente, valor, contaCliente, id]
    );
}

export async function deletarCliente(id: string) {
    const conn = await conexao;
    await conn.query('DELETE FROM tb_transacoes WHERE id_transferencia = ?', [id]);
}