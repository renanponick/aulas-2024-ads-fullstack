const app = require("../../src/server");
const request = require("supertest");

describe("Teste de api pra usuarios", () => {
  test("Post /api/v1/user ", async () => {
    const body = {
      nome: "Teste",
      email: "user@teste.com",
      senha: 123,
    };

    const response = await request(app).post("/api/v1/user").send(body);
    this.id = response.body.id;

    expect(response.statusCode).toBe(201);
    expect(response.body.nome).toBe(body.nome);
    expect(response.body.email).toBe(body.email);
  });

  test("Post /api/v1/login ", async () => {
    const body = {
      email: "user@teste.com",
      senha: 123,
    };

    const response = await request(app).post("/api/v1/login").send(body);
    this.token = response.body.token;

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBe.string;
  });

  test("Get /api/v1/user ", async () => {
    const response = await request(app)
      .get("/api/v1/user")
      .set("Authorization", this.token);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe.array;
  });

  test("Put /api/v1/user ", async () => {
    const body = { nome: "Teste Alterado" };
    const response = await request(app)
      .put(`/api/v1/user/${this.id}`)
      .set("Authorization", this.token)
      .send(body);

    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe(body.nome);
  });

  test("Delete /api/v1/user ", async () => {
    const response = await request(app)
      .delete(`/api/v1/user/${this.id}`)
      .set("Authorization", this.token);

    expect(response.statusCode).toBe(204);
  });
});
