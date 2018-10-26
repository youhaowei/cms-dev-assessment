import React, {Component} from 'react';
import Article from './article';
import loremIpsum from 'lorem-ipsum';
import TwoColumnArticle from './article-two-column';

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

    componentDidMount() {
        // fetching from news API
        /*
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1df5d9c08ff84cc4a54c09b9179bd4ff').then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({
                articles: data.articles.map(val => ({
                    ...val,
                    header: val.title,
                    image: val.urlToImage
                }))
            })
        })
        */
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
                            <Article {...article} key={i} />
                        </div>
                    )
                } else if (i % 6 === 5) {
                    return <div className="col-lg-6 col-md-4">
                        <TwoColumnArticle {...article} key={i} />
                    </div>
                } else {
                    return (
                        <div className="col-lg-3 col-md-4">
                            <Article {...article} key={i} />
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
