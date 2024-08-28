import React from 'react';

function SortButtons({ handleSort, sortOrder }) {
  return (
    <div>
      <button onClick={() => handleSort('asc')} className={sortOrder === 'asc' ? 'active' : ''}>Sort Ascending</button>
      <button onClick={() => handleSort('desc')} className={sortOrder === 'desc' ? 'active' : ''}>Sort Descending</button>
    </div>
  );
}

export default SortButtons;
