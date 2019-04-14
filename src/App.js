import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './components/Header';
import GifTrendingList from './components/GifTrendingList';
import GifView from './components/GifView';
import GifSearchList from './components/GifSearchList';
import history from './history';

import './App.css';

const App = () => {
  return (
      <div className="App">        
        <Router history={history}>
          <Header />
          <Route path="/" exact component={GifTrendingList}/>
          <Route path="/search/:query" exact component={GifSearchList}/>
          <Route path="/view/:id" exact component={GifView}/>
        </Router>
      </div>
  );
}

export default App;
