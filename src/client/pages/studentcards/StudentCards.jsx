import React, { useState } from 'react';

// Sample data (20 rows)
const data = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Name ${i + 1}`,
  value: `Value ${i + 1}`
}));

const itemsPerPage = 5;

const StudentCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (currentPage > 1) {
      pageNumbers.push(
        <button key="prev" onClick={handlePrevious}>
          Previous
        </button>
      );
    } 

    pageNumbers.push(
      <button
        key={1}
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pageNumbers.push(<span key="dots1">...</span>);
    }

    if (currentPage > 2 && currentPage < totalPages - 1) {
      pageNumbers.push(
        <button
          key={currentPage}
          onClick={() => handleClick(currentPage)}
          disabled={true}
        >
          {currentPage}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key="dots2">...</span>);
    }

    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pageNumbers.push(
        <button key="next" onClick={handleNext}>
          Next
        </button>
      );
    }

    return pageNumbers;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default StudentCards;
