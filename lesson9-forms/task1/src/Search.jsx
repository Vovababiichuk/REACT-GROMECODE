  import React, { useState } from 'react';

  const Search = () => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      alert(`Search text: ${searchText}`);  
    };

    const handleChange = (e) => {
      setSearchText(e.target.value);
    }

    return (
      <form onSubmit={handleSubmit} className="search">
        <input onChange={handleChange} type="text" className="search__input" value={searchText} />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  };

  export default Search;
