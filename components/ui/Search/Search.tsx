import './search.scss';

const Search = () => {
  return (
    <div className='search'>
      <div className="search__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.94976 17.7296C14.5695 17.7296 18.3146 13.9845 18.3146 9.3648C18.3146 4.74505 14.5695 1 9.94976 1C5.33001 1 1.58496 4.74505 1.58496 9.3648C1.58496 13.9845 5.33001 17.7296 9.94976 17.7296Z"
            stroke="#9D9D9D" strokeWidth="1.79246" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9248 15.3398L23.0946 22.5097" stroke="#9D9D9D" strokeWidth="1.79246" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      </div>
      <input className='search__input' type="text" placeholder='Search Art Work / Creator'/>
    </div>
  )
}
export default Search;