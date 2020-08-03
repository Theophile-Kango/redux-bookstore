import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  background: white;
  margin: 40px 100px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const categoryStyle = {
  color: '#121212',
  fontWeight: 'bold'
}
export default function Book({
  id, title, category, removeBook,
}) {
  return (
    <Section>
      <p style={categoryStyle}>{category}</p>
      <p>{title}</p>
      <button type="button" onClick={() => removeBook(id)}>Remove</button>
    </Section>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
