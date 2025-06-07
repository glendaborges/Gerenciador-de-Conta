import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { errorResponse } from "../utils/apiResponse";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    res.status(400).json(errorResponse("Erro de validação", err.errors));
    return;
  }

  res.status(500).json(errorResponse("Erro interno do servidor", err.message));
};
