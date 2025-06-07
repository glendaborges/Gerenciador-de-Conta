import { successResponse, errorResponse } from "../utils/apiResponse";

describe("apiResponse helpers", () => {
  it("deve retornar resposta de sucesso padrão", () => {
    const data = { nome: "João" };
    const response = successResponse(data, "Operação realizada");
    expect(response).toEqual({
      success: true,
      message: "Operação realizada",
      data,
    });
  });

  it("deve retornar resposta de sucesso com mensagem padrão", () => {
    const data = [1, 2, 3];
    const response = successResponse(data);
    expect(response).toEqual({
      success: true,
      message: "Sucesso",
      data,
    });
  });

  it("deve retornar resposta de erro padrão", () => {
    const response = errorResponse();
    expect(response).toEqual({
      success: false,
      message: "Erro",
      details: undefined,
    });
  });

  it("deve retornar resposta de erro com detalhes", () => {
    const details = ["Campo obrigatório"];
    const response = errorResponse("Falha na validação", details);
    expect(response).toEqual({
      success: false,
      message: "Falha na validação",
      details,
    });
  });
});