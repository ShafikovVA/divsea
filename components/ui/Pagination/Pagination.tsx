import './pagination.scss';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';

interface IPaginationProps {
    pages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination = ({ pages, currentPage, setCurrentPage }: IPaginationProps) => {
    let pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const handleNextPage = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    return (
       <div className="pagination">
        <button 
            className={`pagination__button ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
        >
           {/* <ArrowLeftIcon /> */}
        </button>
        {pagesArray.map(page => (
            <button 
                className={`pagination__item ${page === currentPage ? 'current' : ''}`} 
                key={page} 
                onClick={() => setCurrentPage(page)}
            >
                {page}
            </button>
        ))}
        <button 
            className={`pagination__button ${currentPage === pages ? 'disabled' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage === pages}
        >
            {/* <ArrowLeftIcon style={{ transform: 'rotate(180deg)' }} /> */}
        </button>
       </div>
    )
}

export default Pagination;