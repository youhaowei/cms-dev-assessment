import React, { Component } from 'react';
import './App.css';
import Article from './components/article';

class App extends Component {
  render() {

    let articles = [];
    for (let i = 0; i < 6; i++) {
      articles.push(<Article key={i} />);
    }

    return (
      <div className="container App">
        <div className="row">
          {articles}
          </div>
      </div>
    );
  }
}

export default App;
