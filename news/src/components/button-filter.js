import React from 'react';
import classNames from 'classnames';

let FilterButton = ({display, curFilter, filterValue, setFilter}) => {
    let classes = classNames({
        'btn': true,
        'btn-default': true,
        'active': filterValue === curFilter
    });
    let handleClick = (e) => {
        setFilter(filterValue);
    }
    return (
        <button type="button" className={classes} onClick={handleClick}>{display || filterValue}</button>
    )
}

export default FilterButton;