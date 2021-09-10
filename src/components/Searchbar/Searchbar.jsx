import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  /*method for submiting form*/
  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      alert('введите данные для запроса');
      return;
    }

    onSubmit(query.trim());
  };

  return (
    <Header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
      </form>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
