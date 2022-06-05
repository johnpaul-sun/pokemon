import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Styles/Pagination.css';

function Pagination({ pokemons, setListPokemons }) {
  // const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5; // Displayed items to user
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setListPokemons(pokemons?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pokemons.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pokemons]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % pokemons.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={currentPage + 1 === pageCount ? null : '➡️'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={currentPage === 0 ? null : '⬅️'}
        renderOnZeroPageCount={null}
        containerClassName="containerClassName"
        activeLinkClassName="activePage"
        pageLinkClassName="pages"
      />
    </>
  );
}

export default Pagination;
