import React from 'react'

function Pagination({itemsLength, itemsPerPage, paginate, currentPage}) {
  
  const pageNumbers = []
  const totalPages =  Math.ceil(itemsLength/itemsPerPage)
  for(let i = 0; i < totalPages; i++){
    pageNumbers.push(i)
  }

  return (
    <div className="shop__pagination">
      {pageNumbers.map(number => (
        number + 1 !== currentPage
        ? <div key={number} onClick={() => paginate(number + 1)} className="shop__pagination-page">{number + 1}</div>
        : <div key={number} onClick={() => paginate(number + 1)} className="shop__pagination-page shop__pagination-page--active">{number + 1}</div>
        ))}
        {pageNumbers.length > 0 &&         <div onClick={() => totalPages !== currentPage ? paginate(currentPage + 1): null} className="shop__pagination-item">
          <img src="./img/team/right.svg" alt="next"/>
        </div>}

      {/* <div className="shop__pagination-page shop__pagination-page--active">1</div>
      <div className="shop__pagination-page">2</div>
      <div className="shop__pagination-item">
        <img src="./img/team/right.svg" alt="next"/>
      </div> */}
    </div>
  )      
}

export default Pagination