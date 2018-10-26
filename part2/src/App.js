import React, { Component } from 'react';
import Article from './components/article';
import loremIpsum from 'lorem-ipsum';
import TwoColumnArticle from './components/article-two-column';
import './styles/app.scss';

class App extends Component {
  render() {

    let articles = [];
    let props = {
      header: loremIpsum({
        sentenceUpperBound: 5
      }),
      content: loremIpsum({
        paragraphLowerBound: 15,
        units: 'paragraphs'
      }),
      image: 'https://via.placeholder.com/500'
    }
    for (let i = 0; i < 4; i++) {
      articles.push(
        <div className="col-lg-3 col-md-4" key={i}>
          <Article {...props} />
        </div>
);
      }
  
      return (
      <div className="container App">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <Article {...props} />
          </div>
            {articles}
            <div className="col-lg-6 col-md-4">
              <TwoColumnArticle {...props} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
