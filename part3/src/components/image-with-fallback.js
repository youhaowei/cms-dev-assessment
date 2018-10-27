import React, {Component} from 'react';

class ImageWithFallback extends Component {

    render() {
        let { image } = this.props;
        return (<div
            style={{
                backgroundImage: `url(${image}), url(assets/fallback.jpg)`
        }}
            className="cover"/>)
    }
}

export default ImageWithFallback;