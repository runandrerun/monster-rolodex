import React from 'react';
import './SearchBox.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchBox;
