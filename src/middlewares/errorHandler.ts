import {  ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      error: "Erro de validação",
      details: err.errors,
    });
    return;
  }

  res.status(500).json({
    error: "Erro interno do servidor",
    message: err.message || "Ocorreu um erro inesperado.",
  });
  return;
};
