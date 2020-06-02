import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// Link is a component for connecting other pages with path

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';



function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={ShopPage} />
    </div>
  );
}

export default App;
