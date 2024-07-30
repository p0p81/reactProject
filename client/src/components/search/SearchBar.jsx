import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div>
        <h3>Find Your Expert</h3>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by profession"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
}
