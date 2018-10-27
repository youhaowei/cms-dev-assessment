import React, {Component} from 'react';
import Article from './article';
import ImageWithFallback from './image-with-fallback';
import ArticleContent from './article-content';

/**
 * Article with image and text split horizontally
 */
class TwoColumnArticle extends Component {

    render() {
        let {image, header, content, readMoreLink} = this.props;
        return (
            <div>
                {/* when screen is large, do vertical split */}
                <div className="d-none d-lg-block d-lg-block">
                    <div className="article two-column row">
                        <div className='col-6'>
                            <ImageWithFallback image={image}/>
                        </div>
                        <ArticleContent
                            header={header}
                            content={content}
                            className='col-sm-6'
                            readMoreLink={readMoreLink}/>
                    </div>
                </div>
                {/* if below large, use default article */}
                <div className="d-lg-none">
                    <Article {...this.props}/>
                </div>
            </div>
        );
    }
}

export default TwoColumnArticle;
