import { useState } from 'react'
import { getEspecie, getGenero, getStatus } from '../../fns/translate'
import './styles.css'
import edit from './../../assets/edit.svg'

export default function Card({ data: personagem, onClick, editable }){
    const [isMouseHover, setIsMouseHover] = useState(false)

    return (
        <div
            className='card char'
            key={personagem.id}
            onClick={onClick}
            onMouseEnter={editable ? ()=> setIsMouseHover(true) : null}
            onMouseLeave={editable ? ()=> setIsMouseHover(false) : null}
        >
            
            <img
                className='char-image'
                src={personagem.image}
                alt={personagem.name}
            />

            <h2>
                {personagem.name} 
                { isMouseHover && <img src={edit} className='edit' /> }
            </h2>

            <div className='char-info'>
            <span><b>Espécie: </b>{getEspecie(personagem.species)}</span>
            <span><b>Gênero: </b>{getGenero(personagem.gender)}</span>
            </div>

            <div>
            {/* <div className='lista-secundaria'>
                <b>Participações:</b>
                { personagem.episode.map(
                ep => 
                    <span key={personagem.name+(ep.split('episode/'))[1]}>
                        Ep-{ (ep.split('episode/'))[1] }
                    </span>
                ) }
            </div> */}
            <h5><b>Status: </b> {getStatus(personagem.status)}</h5>
            </div>
        </div>
    )
}