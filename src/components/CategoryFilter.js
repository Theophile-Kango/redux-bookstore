import React from 'react'

export default function CategoryFilter({ filterChange }) {
    const options = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
        <>
            <h3>Filter by</h3>
            <select onChange={filterChange}>
                {options.map(option => (<option key={option}>{option}</option>))}
            </select>
        </>
    )
}

CategoryFilter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
};
 
