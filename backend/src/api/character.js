const CharactersController = require('../controller/character')

class CharactersApi {
    async createCharacter(req, res) {
        const { name, species, image, gender, status } = req.body

        try {
            const characters = await CharactersController.create(name, species, image, gender, status)
            return res.status(201).send(characters)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar personagem: ${e.message}`})
        }
    }

    async updateCharacter(req, res) {
        const { id } = req.params
        const { name, species, image, gender, status } = req.body

        try {
            const characters = await CharactersController.update(Number(id), name, species, image, gender, status)
            return res.status(200).send(characters)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar personagem: ${e.message}`})
        }
    }

    async deleteCharacter(req, res) {
        const { id } = req.params

        try {
            await CharactersController.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar personagem: ${e.message}`})
        }
    }

    async findOneCharacter(req, res) {
        const { id } = req.params
        try {
            const characterss = await CharactersController.findOne(id)
            return res.status(200).send(characterss)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar personagem: ${e.message}`})
        }
    }

    async findAllCharacters(req, res) {
        const { page } = req.query
        try {
            const characterss = await CharactersController.findAll(Number(page))
            return res.status(200).send(characterss)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar personagem: ${e.message}`})
        }
    }
}

module.exports = new CharactersApi()