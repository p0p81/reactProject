import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault()
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
    setInputValue('')
  };

  return (
    <div>
        <h3>Find Your Expert</h3>
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search by profession"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
}
