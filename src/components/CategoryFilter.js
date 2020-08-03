import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


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
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  padding: 0 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`

const User = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 50%;
`

export const input = {
  fontSize: '13px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none',
}

const avatar = {
  color: '#0290ff',
  fontSize: '17px',
}
export function CategoryFilter({ handleFilterChange }) {
  const options = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);
  return (
    <Main>
       <Container>
        <Title>Bookstore CMS</Title>
        <Categories style={{ color: '#121212', }}>books</Categories>
        <Categories style={{ marginRight: '20px', }}>categories</Categories>
        <select style={input} onChange={filterChange}>
          {options.map(option => (<option style={{ fontSize: '15px', }} key={option}>{option}</option>))}
        </select>
      </Container>
      <User>
        <FontAwesomeIcon icon={faUser} style={avatar} />
      </User>
    </Main>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
