import './styles.css'

export default function Pagination({ page, totalPages, onPageChange }){
    const handlePrev = () => {
        if (page > 1) onPageChange(page - 1);
    };
    
    const handleNext = () => {
        if (page < totalPages){
            onPageChange(page + 1)
        };
    };
    
    return (
        <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
            Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages}>
            Próxima
        </button>
        </div>
    );
}