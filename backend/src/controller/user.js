const UserModel = require("../model/user");

class UserController {
  createUser(nome, email, senha) {
    if (nome === undefined || email === undefined || senha === undefined) {
      throw new Error("Nome, email e senha são obrigatórios.");
    }

    const userValue = UserModel.Create({
      nome,
      email,
      senha
    });

    return userValue;
  }

  findUser(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }

    const userValue = UserModel.FindByIndex(id);

    if (!userValue) {
      throw new Error("Usuário não encontrado.");
    }

    return userValue;
  }

  update(id, nome, email, senha) {
    const user = UserModel.FindByIndex(id);
    user.nome = nome || user.nome;
    user.email = email || user.email;
    user.senha = senha || user.senha;
    UserModel.Update(id, user);

    return user;
  }

  delete(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }
    UserModel.Delete(id);

    return;
  }

  find() {
    return UserModel.FindAll();
  }
}

module.exports = new UserController();
