import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Categories = styled.h3`
  color: #f5f6fa;
  text-transform: uppercase;
  font-size: 16px;;
`;

const Title = styled.h1`
  color: #0290ff;
  font-size: 37px;
`;
export default function CategoryFilter({ handleFilterChange }) {
  const options = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);
  return (
    <>
      <Title>Bookstore CMS</Title>
      <Categories style={{ color: '#121212', }}>books</Categories>
      <Categories>categories</Categories>
      <select onChange={filterChange}>
        {options.map(option => (<option key={option}>{option}</option>))}
      </select>
    </>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
