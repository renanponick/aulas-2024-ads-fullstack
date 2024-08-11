const users = new Array({
  nome: "João",
  email: "jao@exemplo.com.br",
  senha: "123456"
});

class Model {
    FindByIndex(index){
        return users[index]
    }

    FindAll(){
        return users
    }

    Create(user){
        users.push(user)
    }

    Update(index, user){
        users[index] = user
    }

    Delete(index){
        users.splice(index, 1)
    }
}

module.exports = new Model();