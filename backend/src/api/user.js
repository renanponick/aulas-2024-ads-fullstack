const UserController = require('../controller/user')

class UserApi {
    createUser(req, res) {
        const { nome, email, senha } = req.body

        try {
            const user = UserController.createUser(nome, email, senha)
            return res.status(201).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}`})
        }
    }

    updateUser(req, res) {
        const { id } = req.params
        const { nome, email, senha } = req.body

        try {
            const user = UserController.update(Number(id), nome, email, senha)
            return res.status(200).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}`})
        }
    }

    deleteUser(req, res) {
        const { id } = req.params

        try {
         UserController.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}`})
        }
    }

    findUsers(_, res) {
        try {
            const users = UserController.find()
            return res.status(200).send(users)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}`})
        }
    }

    findUser(req, res) {
        try {
            const users = UserController.findUser(req.params.id)
            return res.status(200).send(users)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}`})
        }
    }
}

module.exports = new UserApi()