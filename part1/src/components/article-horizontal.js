import React from 'react';
import Article from './article';

/**
 * Article with image and text split horizontally
 */
let HorizontalArticle = (props) => {
    return (
        <div>
            <div className="d-none d-lg-block d-lg-block">
                <div className="article horizontal row">
                    <div
                        style={{
                            backgroundImage: `url(${props.image})`
                        }}
                        className="cover col-6"
                    />
                    <div className="content col-sm-6">
                <h5 className="header">{props.header}</h5>
                <p>{props.content}</p>
                <div className="read-more" />
            </div>
                </div>
            </div>
            {/* if below large, use default article */}
            <div className="d-lg-none">
                <Article {...props} />
            </div>
        </div>
    );
};

export default HorizontalArticle;
