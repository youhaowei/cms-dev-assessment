import React, {Component} from 'react';
import Article from './article';
//import loremIpsum from 'lorem-ipsum';
import TwoColumnArticle from './article-two-column';
import {loadData} from '../apiClients';
import { addArticles } from '../actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticles: (articles, category) => dispatch(addArticles(articles, category))
    }
}

class ArticleList extends Component {

    componentDidMount() {

        let handleSimpleViewData = (category) => {
            // return data handler for that category
            return (data) => {
                console.log(data);
                let articles = data
                    .data
                    .map(val => ({
                        header: val.title,
                        content: val.description,
                        image: val.mediaurl,
                        readMoreLink: val.weburl
                    }))
                
                // send dispatch
                this
                    .props
                    .addArticles(articles, category);
            }
        }

        let loadDataByCategory = (category) => {
            loadData(category).then(handleSimpleViewData(category));
        }

        loadDataByCategory('listings');
        loadDataByCategory('events');
        loadDataByCategory('offers');
        
    }

    render() {

        let filteredArticles = this.props.articles.filter(article => {
            if (this.props.filter) {
                return article.category === this.props.filter;
            } else {
                return true;
            }
        })
        let articles = filteredArticles
            .map((article, i) => {
                // the layout repeat after 6 articles the first one will have double column on
                // large screen and the last one will have double column with vertical split
                if (i % 6 === 0) {
                    return (
                        <div className="col-lg-6 col-md-4" key={i}>
                            <Article {...article}/>
                        </div>
                    )
                } else if (i % 6 === 5) {
                    return <div className="col-lg-6 col-md-4" key={i}>
                        <TwoColumnArticle {...article}/>
                    </div>
                } else {
                    return (
                        <div className="col-lg-3 col-md-4" key={i}>
                            <Article {...article}/>
                        </div>
                    )
                }
            });

        return (
                <div className="row">
                    {articles}
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
