import React from 'react';
import './App.css';
import AppendForm from './components/AppendForm';
import LoadButton from './components/LoadButton';
import StoreButton from './components/StoreButton';
import FilterField from './components/FilterField';
import List from './components/List';

const App = () => (
    <div className="App">
      <FilterField />
      <div className='row'>
        <div className='column'>
          <LoadButton />
        </div>
        <div className='column'>
          <AppendForm />
        </div>
        <div className='column'>
          <StoreButton />
        </div>
      </div>
      <List />
    </div>
)

export default App;
