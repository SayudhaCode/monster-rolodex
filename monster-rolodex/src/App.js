// import CardList from './components/card-lists/card-list.component';
import { useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log(searchField);

  const onSearchChange =(event)=> {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        onChangeHandler={ onSearchChange }
        placeholder="search monsters"
      />
    </div>
  );
};

export default App;
