import React from 'react';
import { setFilter } from '../actions';
import FilterButton from './button-filter';
import { connect } from 'react-redux';
import '../styles/filters.scss';

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter))
        }
    }
}

let Filters = ({ filter, setFilter }) => {
    let props = {
        curFilter : filter,
        setFilter
    }
    return (<div className="filters">
        <FilterButton display="all" {...props}></FilterButton>
        <FilterButton filterValue="bbc-news" display="BBC" {...props}></FilterButton>
        <FilterButton filterValue="the-new-york-times" display="New York Times" {...props}></FilterButton>
        <FilterButton filterValue="cnn" display="CNN" {...props}></FilterButton>
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);