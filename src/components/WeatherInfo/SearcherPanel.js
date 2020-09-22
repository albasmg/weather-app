import React from 'react';
import AsyncSelect from 'react-select/async';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const SearcherPanel = ({ onClose, onSearcherChange, onSearcherSelect }) => {
  const promiseOptions = (inputValue) =>
    onSearcherChange(inputValue).then((results) =>
      results.map((result) => ({
        label: result.title,
        value: result.woeid,
      }))
    );

  const handleSelectChange = (selectedOption) => {
    onSearcherSelect(selectedOption);
    onClose();
  };

  return (
    <section>
      <AsyncSelect
        loadOptions={promiseOptions}
        cacheOptions
        onChange={handleSelectChange}
      />
      <button>Search</button>
      <button onClick={onClose}>Close</button>
    </section>
  );
};

export default SearcherPanel;
