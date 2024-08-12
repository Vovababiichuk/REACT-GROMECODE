import PropTypes from 'prop-types';
import './search.scss';

function Search ({ name }) {
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

Search.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Search;
