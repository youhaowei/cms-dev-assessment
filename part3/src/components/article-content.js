import React, {Component} from 'react';

class ArticleContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    handleMouseIn = (e) => {
        this.setState({
            hovered: true
        })
    }

    handleMouseOut = (e) => {
        this.setState({
            hovered: false
        })
    }

    render() {
        let { className, header, content, readMoreLink } = this.props;
        let { hovered } = this.state;
        return (
            <div className={className ? `content ${className}` : 'content'} onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}>
                <h5 className="header">{header}</h5>
                <p>{content}</p>
                <div className="read-more">
                    {hovered && <a type='button' className='btn btn-info' href={readMoreLink}>Read More
                    </a>}
                </div>
            </div>
        )
    }
}

export default ArticleContent;