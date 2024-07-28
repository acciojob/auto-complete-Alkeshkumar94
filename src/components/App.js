
import './../styles/App.css';

import React, { useState, useEffect } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    if (inputValue === '') {
      setSuggestions([]);
      return;
    }
    
    const delayDebounceFn = setTimeout(() => {
      const filteredSuggestions = fruits.filter(fruit =>
        fruit.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }, 300); // 300ms debounce to simulate async call

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  return (
    <div>
      <h1>Search item</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a fruit..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
