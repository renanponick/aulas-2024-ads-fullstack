import './styles.css'

export default function AddButton({ onClick }){
    return (
        <button className='addButton' onClick={onClick}>+</button>
    )
}