import React, { Component } from 'react';

import './styles/app.scss';
import ArticleList from './components/articleList';



class App extends Component {
  render() {
    return (
      <div className="app">
        <ArticleList />
      </div>
      );
    }
  }
  
  export default App;
