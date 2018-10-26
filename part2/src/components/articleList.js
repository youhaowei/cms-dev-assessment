import React, {Component} from 'react';
import Article from './article';
// import loremIpsum from 'lorem-ipsum';
import TwoColumnArticle from './article-two-column';

class ArticleList extends Component {

    constructor(props) {
        super(props);
        let articles = [];

        // insert fake data
        /*

        let article = {
            header: loremIpsum({sentenceUpperBound: 5}),
            content: loremIpsum({paragraphLowerBound: 15, units: 'paragraphs'}),
            image: 'https://via.placeholder.com/500'
        }

        for (let i = 0; i < 6; i++) {
            articles.push(article);
        }
        */
        this.state = {
            articles
        }
    }

    componentDidMount() {
        // fetching from news API
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1df5d9c08ff84cc4a54c09b9179bd4ff').then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({
                articles: data.articles.map(val => ({
                    ...val,
                     // use description when content is not available
                    content: val.content || val.description,
                    header: val.title,
                    image: val.urlToImage
                }))
            })
        })
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
                        <div className="col-lg-6 col-md-4" key={i}>
                            <Article {...article} />
                        </div>
                    )
                } else if (i % 6 === 5) {
                    return <div className="col-lg-6 col-md-4" key={i}>
                        <TwoColumnArticle {...article}  />
                    </div>
                } else {
                    return (
                        <div className="col-lg-3 col-md-4" key={i}>
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
