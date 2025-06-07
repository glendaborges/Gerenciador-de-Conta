import { Request, RequestHandler, Response } from 'express';
import {
    listClientsService,
    getClientByIdService,
    createClientService,
    updateClientService,
    deleteClientService
} from '../services/clientService';
import { clienteSchema } from "../validators/clientValidator";
import { errorResponse, successResponse } from '../utils/apiResponse';

export async function listClientsController(req: Request, res: Response) {
    try {
        const data = await listClientsService();
        res.json(successResponse(data));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error fetching data';
        res.status(500).json(errorResponse(errorMessage));
    }
}

export async function getClientByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json(errorResponse('Client ID is required'));
            return;
        }
        const data = await getClientByIdService(id);
        res.json(successResponse(data));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error fetching client by id';
        res.status(500).json(errorResponse(errorMessage));
    }
}

export const createClientController: RequestHandler = async (req, res) => {
    try {
        const parseResult = clienteSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json(errorResponse("Validation error", parseResult.error.errors));
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        await createClientService(nomeCliente, valor, contaCliente);
        res.json(successResponse({ status: 'Client created successfully' }));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : "Error creating client";
        res.status(500).json(errorResponse(errorMessage));
    }
};

export const updateClientController: RequestHandler = async (req, res) => {
    try {
        const parseResult = clienteSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json(errorResponse("Validation error", parseResult.error.errors));
            return;
        }
        const { nomeCliente, valor, contaCliente } = parseResult.data;
        const { id } = req.params;
        if (!id) {
            res.status(400).json(errorResponse('Client ID is required'));
            return;
        }
        await updateClientService(id, nomeCliente, valor, contaCliente);
        res.json(successResponse({ status: 'Client updated successfully!' }));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error updating client';
        res.status(500).json(errorResponse(errorMessage));
    }
};

export async function deleteClientController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json(errorResponse('Client ID is required'));
            return;
        }
        await deleteClientService(id);
        res.json(successResponse({ status: 'Client deleted successfully!' }));
    } catch (error) {
        console.error(error);
        const errorMessage = (error instanceof Error) ? error.message : 'Error deleting client';
        res.status(500).json(errorResponse(errorMessage));
    }
}
