import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch('https://react-hooks-update-bb8f6.firebaseio.com/ingredients.json')
      .then(res => res.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (let key in responseData) {
          loadedIngredients.push({ id: key, ...responseData[key] });
        }
        setIngredients(loadedIngredients);
      });
  }, []);
  const addIngredient = ingredient => {
    fetch('https://react-hooks-update-bb8f6.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(resData => {
        setIngredients(prevState => [
          { id: resData.name, ...ingredient },
          ...prevState
        ]);
      });
  };
  const removeIngredient = id => {
    setIngredients(prevState => prevState.filter(ig => ig.id !== id));
  };
  return (
    <div className="App">
      <IngredientForm addIngredient={addIngredient} />

      <section>
        <Search onLoadIngredients={setIngredients} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
};

export default Ingredients;
