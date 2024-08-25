const characters = require("../model/character");

class CharactersController {
  async create(name, species, image, gender, status) {
    if (!name || !species || !image || !gender || !status) {
      throw new Error("Dados obrigatórios não preenchidos.");
    }

    const charactersValue = await characters.create({
      name,
      species,
      image,
      gender,
      status
    });

    return charactersValue;
  }

  async findOne(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }

    const charactersValue = await characters.findByPk(id);

    if (!charactersValue) {
      throw new Error("Personagem não encontrado.");
    }

    return charactersValue;
  }
  
  async findAll(page = 1) {
    try {
      const limit = 20;
      const offset = (page - 1) * limit;
      const { count, rows: charactersValue } = await characters.findAndCountAll({ limit, offset });

      if(page === 1 && charactersValue.length <= 0) {
        let page = 1;
        let hasMore = true;
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        while(hasMore){
          try {
            const result = await fetch(
              `https://rickandmortyapi.com/api/character?page=${page}`,
              requestOptions
            )
              .then(response => response.text())
              .then(result => { return result })
              .catch(error => console.log('error', error));
            const response = JSON.parse(result)

            if(!response?.info?.next){
              hasMore = false
            }

            response.results.map(it => {
              characters.create({
                id: it.id,
                name: it.name,
                species: it.species,
                image: it.image,
                gender: it.gender,
                status: it.status
              })
            })
            page++
          } catch (error) {
            hasMore = false
          }
        }
      }

      const pages = Math.ceil(count / limit)

      const result =  page <= pages 
        ? {
          info: {
            count: count,
            pages: pages,
            next: pages == page ? null : `http://localhost:3000/api/v1/character/?page=${page+1}`,
            prev: page == 1 ? null : `http://localhost:3000/api/v1/character/?page=${page}`
          },
          results: charactersValue
        } 
      : {
        info: {
          count: count,
          pages: pages,
          next: `http://localhost:3000/api/v1/character/?page=${1}`,
          prev: `http://localhost:3000/api/v1/character/?page=${1}`
        },
        results: []
      }

      return result;
    } catch (error) {
      console.log(error)
      throw new Error('Página não encontrada, tente novamente')
    }
  }

  async update(id, name, species, image, gender, status) {
    const oldCharacters = await characters.findByPk(id);

    if(!oldCharacters){
      throw new Error('Personagem não encontrado!')
    }

    oldCharacters.name = name || oldCharacters.name;
    oldCharacters.species = species || oldCharacters.species;
    oldCharacters.image = image || oldCharacters.image;
    oldCharacters.gender = gender || oldCharacters.gender;
    oldCharacters.status = status || oldCharacters.status;
    oldCharacters.save();

    return oldCharacters;
  }

  async delete(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }
    const charactersValue = await this.findOne(id);
    charactersValue.destroy();

    return;
  }
}

module.exports = new CharactersController();
