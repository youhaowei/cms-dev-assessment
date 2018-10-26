import React from 'react';
import '../styles/article.scss';
import ImageWithFallback from './image-with-fallback';

/**
 * Regular article display, with vertical layout
 */
let Article = (props) => {
    return (
        <div className="article vertical">
            <ImageWithFallback image={props.image}/>
            <div className="content">
                <h5 className="header">{props.header}</h5>
                <p>{props.content}</p>
                <div className="read-more" />
            </div>
        </div>
    );
};

export default Article;
