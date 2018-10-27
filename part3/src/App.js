import React, { Component } from 'react';

import './styles/app.scss';
import ArticleList from './components/articleList';
import Filters from './components/filters';



class App extends Component {
  render() {
    return (
      <div className="App container">
        <Filters />
        <ArticleList />
      </div>
      );
    }
  }
  
  export default App;
