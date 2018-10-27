import React, { Component } from 'react';
import '../styles/article.scss';
import ImageWithFallback from './image-with-fallback';
import ArticleContent from './article-content';

/**
 * Regular article display, with vertical layout
 */
class Article extends Component {

    render() {
        let { image, header, content, readMoreLink } = this.props;
        return (
            <div className="article vertical">
                <ImageWithFallback image={image}/>
                <ArticleContent header={header} content={content} readMoreLink={readMoreLink} />
            </div>
        );
    }
}

export default Article;
