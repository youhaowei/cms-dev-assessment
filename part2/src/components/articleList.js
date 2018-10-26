import React, {Component} from 'react';
import Article from './components/article';
import loremIpsum from 'lorem-ipsum';
import TwoColumnArticle from './components/article-two-column';
import './styles/app.scss';

class ArticleList extends Component {

    constructor(props) {
        super(props);
        let article = {
            header: loremIpsum({sentenceUpperBound: 5}),
            content: loremIpsum({paragraphLowerBound: 15, units: 'paragraphs'}),
            image: 'https://via.placeholder.com/500'
        }
        let articles = [];
        for (let i = 0; i < 8; i++) {
            articles.push(article);
        }
        this.state = {
            articles
        }
    }

    render() {
        let articles = this
            .state
            .articles
            .map((article, i) => {
                // the layout repeat after 6 articles the first one will have double column on
                // large screen and the last one will have double column with vertical split
                if (i % 6 === 0) {
                    return (
                        <div className="col-lg-6 col-md-4">
                            <Article {...article} />
                        </div>
                    )
                } else if (i % 6 === 5) {
                    return <div className="col-lg-6 col-md-4">
                        <TwoColumnArticle {...article} />
                    </div>
                } else {
                    return (
                        <div className="col-lg-3 col-md-4">
                            <Article {...article} />
                        </div>
                    )
                }
            });


        return (
            <div className="container App">
                <div className="row">
                    {articles}
                </div>
            </div>
        );
    }
}

export default ArticleList;
