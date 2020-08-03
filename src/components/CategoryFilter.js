import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Categories = styled.h3`
  color: #ccc;
  text-transform: uppercase;
  font-size: 15px;
  margin-left: 50px;
`;

const Title = styled.h1`
  color: #0290ff;
  font-size: 30px;
`;

const Container = styled.div`
  padding: 0 100px;
  background: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
export default function CategoryFilter({ handleFilterChange }) {
  const options = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);
  return (
    <Container>
      <Title>Bookstore CMS</Title>
      <Categories style={{ color: '#121212', }}>books</Categories>
      <Categories style={{ marginRight: '20px', }}>categories</Categories>
      <select onChange={filterChange}>
        {options.map(option => (<option style={{ fontSize: '15px', }} key={option}>{option}</option>))}
      </select>
    </Container>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
