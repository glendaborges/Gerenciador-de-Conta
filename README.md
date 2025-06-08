# 💰 Gerenciador de Conta

API

API RESTful para gerenciamento de transações bancárias, desenvolvida com **Node.js**, **TypeScript** e **MySQL**.

Permite realizar operações básicas como **criar**, **listar**, **buscar por ID**, **editar** e **remover** transações.

---

## 🧰 Tecnologias

- Node.js
- TypeScript
- Express
- MySQL
- dotenv

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/Gerenciador-de-Conta.git
cd Gerenciador-de-Conta
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
PORT=3000
```

---

## 🚀 Rodando o projeto

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 📌 Endpoints

### `GET /`

Lista todas as transações.

### `GET /:id`

Busca uma transação por `id_transferencia`.

### `POST /`

Cria uma nova transação.

**Body:**

```json
{
  "nomeCliente": "Maria",
  "valor": 100.0,
  "contaCliente": "123456"
}
```

### `PUT /:id`

Atualiza uma transação existente.

**Body:**

```json
{
  "nomeCliente": "Maria",
  "valor": 150.0,
  "contaCliente": "123456"
}
```

### `DELETE /:id`

Remove uma transação por ID.

---

## ✅ To-do (Refatoração para Boas Práticas)

- [x] Separar Frontend e Backend. --João
- [x] Implementar **validação de dados** com Zod. --Alan e Glenda
- [x] Adotar arquitetura **MVC** (separação de responsabilidades). --Richardy
- [x] Criar **middleware de tratamento de erros**. --Pedro e Glenda
- [x] Usar **dotenv** para variáveis sensíveis.
- [x] Padronizar estrutura e formato das **respostas da API**.--Pedro e Glenda
- [x] Adicionar **testes unitários** com Jest ou Vitest. --Alan e Glenda

---
