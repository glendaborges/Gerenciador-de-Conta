import { Request, RequestHandler, Response } from 'express';
import {
    listTransactionsService,
    getTransactionByIdService,
    createTransactionService,
    updateTransactionService,
    deleteTransactionService
} from '../services/transactionService';
import { TransactioneSchema } from "../validators/transactionValidator";
import { errorResponse, successResponse } from '../utils/apiResponse';

export async function listTransactionsController(req: Request, res: Response) {
    try {
        const data = await listTransactionsService();
        res.json(successResponse(data));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error fetching data';
        res.status(500).json(errorResponse(errorMessage));
    }
}

export async function getTransactionByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json(errorResponse('Transaction ID is required'));
            return;
        }
        const data = await getTransactionByIdService(id);
        res.json(successResponse(data));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error fetching Transaction by id';
        res.status(500).json(errorResponse(errorMessage));
    }
}

export const createTransactionController: RequestHandler = async (req, res) => {
    try {
        const parseResult = TransactioneSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json(errorResponse("Validation error", parseResult.error.errors));
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        await createTransactionService(nomeCliente, valor, contaCliente);
        res.json(successResponse({ status: 'Transaction created successfully' }));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : "Error creating Transaction";
        res.status(500).json(errorResponse(errorMessage));
    }
};

export const updateTransactionController: RequestHandler = async (req, res) => {
    try {
        const parseResult = TransactioneSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json(errorResponse("Validation error", parseResult.error.errors));
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        const { id } = req.params;
        if (!id) {
            res.status(400).json(errorResponse('Transaction ID is required'));
            return;
        }
        await updateTransactionService(id, nomeCliente, valor, contaCliente);
        res.json(successResponse({ status: 'Transaction updated successfully!' }));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error updating Transaction';
        res.status(500).json(errorResponse(errorMessage));
    }
};

export async function deleteTransactionController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json(errorResponse('Transaction ID is required'));
            return;
        }
        await deleteTransactionService(id);
        res.json(successResponse({ status: 'Transaction deleted successfully!' }));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error deleting Transaction';
        res.status(500).json(errorResponse(errorMessage));
    }
}
