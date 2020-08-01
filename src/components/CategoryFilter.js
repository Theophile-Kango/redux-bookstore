import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter({ handleFilterChange }) {
    const options = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    
    return (
        <>
            <span>Filter by</span>
            <select onChange={handleFilterChange}>
                {options.map(option => (<option key={option}>{option}</option>))}
            </select>
        </>
    )
}

CategoryFilter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
};
 
