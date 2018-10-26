import React from 'react';
import '../styles/article.scss';

/**
 * Regular article display, with vertical layout
 */
let Article = (props) => {
    return (
        <div className="article vertical">
            <div style={{
                backgroundImage: `url(${props.image})`
            }} className="cover" />
            <div className="content">
                <h5 className="header">{props.header}</h5>
                <p>{props.content}</p>
                <div className="read-more" />
            </div>
        </div>
    );
};

export default Article;
