import './pagination.scss';

interface IPaginationItemProps {
  page: number;
  className?: string;
  setCurrentPage: (page: number) => void;
}

const PaginationItem = ({
  page,
  className,
  setCurrentPage,
}: IPaginationItemProps) => {
  return (
    <button
      className={`pagination__item ${className}`}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </button>
  );
};

export default PaginationItem;
