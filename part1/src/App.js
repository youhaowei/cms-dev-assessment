import React, { Component } from 'react';
import Article from './components/article';
import loremIpsum from 'lorem-ipsum';
import TwoColumnArticle from './components/article-two-column';
import './styles/app.scss';
import ArticleList from '../../part2/src/components/articleList';

class App extends Component {
  render() {
    return <ArticleList />
  }
}

export default App;
