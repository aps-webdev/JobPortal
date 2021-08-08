import React from 'react';

import './Pagination.styles.scss';
import Button from '../Button/Button.index';

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = React.useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className='paginationContainer'>
      <h1 className='title'>{title}</h1>

      {/* show the posts, 10 posts at a time */}
      <div className='dataContainer'>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
      <div className='pagination'>
        {/* previous button */}
        <Button
          isSecondary
          onClick={goToPreviousPage}
          disabled={currentPage === 1 ? true : ''}
        >
          &#10094; prev
        </Button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <Button
          isSecondary
          onClick={goToNextPage}
          disabled={currentPage === pages ? true : ''}
        >
          next &#10095;
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
