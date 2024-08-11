const userController = require("../../src/controller/user");

describe("Testes de integração do usuário", () => {
  it("Should add an user", async () => {
    const user = await userController.createUser(
      "Fulano",
      "fulano@teste.com",
      "123456"
    );
    this.USER_ID = user.id;
    expect(user).toHaveProperty("nome", "Fulano");
  });

  it("Should find an user", async () => {
    const user = await userController.findUser(this.USER_ID);
    expect(user).toHaveProperty("nome", "Fulano");
  });

  it("Should update an user", async () => {
    const user = await userController.update(
      this.USER_ID,
      "Ciclano",
      "ciclano@teste.com",
      "123456"
    );
    expect(user).toHaveProperty("nome", "Ciclano");
  });

  it("Should delete an user", async () => {
    const user = await userController.delete(this.USER_ID);
    expect(user).toBeUndefined();
  });
});
