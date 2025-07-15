'use client';
import './pagination.scss';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import PaginationItem from './PaginationItem';

interface IPaginationProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const isManyPages = pages > 10;
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

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

  const paginationItems = () => {
    if (isManyPages) {
      return (
        <>
          {currentPage <= 5 ? (
            pagesArray
              .slice(0, currentPage - 1)
              .map((page) => (
                <PaginationItem
                  key={page}
                  page={page}
                  setCurrentPage={setCurrentPage}
                />
              ))
          ) : (
            <>
              <PaginationItem page={1} setCurrentPage={setCurrentPage} />
              ...
              {pagesArray
                .slice(currentPage - 4, currentPage - 1)
                .map((page) => (
                  <PaginationItem
                    key={page}
                    page={page}
                    setCurrentPage={setCurrentPage}
                  />
                ))}
            </>
          )}
          <PaginationItem
            page={currentPage}
            className={'current'}
            setCurrentPage={setCurrentPage}
          />
          {currentPage >= pages - 4 ? (
            pagesArray
              .slice(currentPage, pages)
              .map((page) => (
                <PaginationItem
                  key={page}
                  page={page}
                  setCurrentPage={setCurrentPage}
                />
              ))
          ) : (
            <>
              {pagesArray.slice(currentPage, currentPage + 3).map((page) => (
                <PaginationItem
                  key={page}
                  page={page}
                  setCurrentPage={setCurrentPage}
                />
              ))}
              ...
              <PaginationItem page={pages} setCurrentPage={setCurrentPage} />
            </>
          )}
        </>
      );
    } else {
      return pagesArray.map((page) => (
        <button
          className={`pagination__item ${page === currentPage ? 'current' : ''}`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ));
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination__button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </button>
      {paginationItems()}
      <button
        className={`pagination__button ${currentPage === pages ? 'disabled' : ''}`}
        onClick={handleNextPage}
        disabled={currentPage === pages}
      >
        <ArrowLeftIcon style={{ transform: 'rotate(180deg)' }} />
      </button>
    </div>
  );
};

export default Pagination;
