import React from 'react';
import loremIpsum from 'lorem-ipsum';

let Article = (props) => {
    return (
        < div className='col-lg-3 col-md-4 article' >
            <img src='https://via.placeholder.com/500' alt='placeholder' className='img-fluid'></img>

            <div className="content">
            <h5 className="header">{loremIpsum({
                sentenceUpperBound: 5,
            })}</h5>
            <p>{loremIpsum({
                    units: 'paragraphs',
                    paragraphLowerBound: 15
                })}</p>
            <div class="read-more"></div>
            </div>
        </div >
    )
}

export default Article;