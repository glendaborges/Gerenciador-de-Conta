export function successResponse(data: any, message = "Sucesso") {
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse(message = "Erro", details?: any) {
  return {
    success: false,
    message,
    details,
  };
}