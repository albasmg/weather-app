import React from 'react';

const SearcherPanel = ({ onClose }) => {
  return (
    <section>
      <input placeholder="Search location"></input>
      <button>Search</button>
      <button onClick={onClose}>Close</button>
    </section>
  );
};

export default SearcherPanel;
