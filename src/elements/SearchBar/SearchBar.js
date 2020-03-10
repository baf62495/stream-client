import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  return (
    <input
      className='stream-search'
      placeholder='Filter by name, email, etc...'
      value={props.searchInput}
      onChange={e => props.updateSearchInput(e.target.value)}
    />
  );
}
