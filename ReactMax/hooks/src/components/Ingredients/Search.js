import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const query =
      filter.length === 0 ? '' : `?orderBy="title"&equalTo="${filter}"`;
    fetch(
      `https://react-hooks-update-bb8f6.firebaseio.com/ingredients.json${query}`
    )
      .then(res => res.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (let key in responseData) {
          loadedIngredients.push({ id: key, ...responseData[key] });
        }
        onLoadIngredients(loadedIngredients);
      });
  }, [filter, onLoadIngredients]);
  const inputHandler = e => {
    setFilter(e.target.value);
  };
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={filter} onChange={inputHandler} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
