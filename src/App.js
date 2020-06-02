import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Link is a component for connecting other pages with path

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/Header/Header'



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
