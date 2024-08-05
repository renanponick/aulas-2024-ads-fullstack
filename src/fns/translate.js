export function getGenero(genero) {
    switch (genero) {
    case 'Male':
        return 'Masculino'
    case 'Female':
        return 'Feminino'
    case 'unknown':
        return 'Desconhecido'
    case 'Genderless':
        return 'Sem Gênero'
    default:
        return genero
    }
}

export function getStatus(status) {
    switch (status) {
    case 'Alive':
        return 'Vivo'
    case 'Dead':
        return 'Morto'
    case 'unknown':
        return 'Desconhecido'
    default:
        return status
    }
}

export function getEspecie(especie) {
    switch (especie) {
    case 'Alien':
        return 'Alienígena'
    case 'Human':
        return 'Humano'
    case 'Robot':
        return 'Robo'
    case 'Disease':
        return 'Doença'
    case 'Humanoid':
        return 'Humanoide'
    case 'unknown':
        return 'Desconhecido'
    case 'Mythological Creature':
        return 'Criatura Mitológica'
    default:
        return especie
    }
}