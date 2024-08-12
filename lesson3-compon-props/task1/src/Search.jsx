import './search.scss';

const Search = ({ name }) => {
  return (
    <>
      <h1 className="search__title">{`Hello, ${name}. What to search for you?`}</h1>
      <div className="search">
        <div className="search__field">
          <input type="text" className="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
