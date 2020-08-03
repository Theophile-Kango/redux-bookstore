import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-family: 'Roboto Slab', serif;
  background: white;
  display: flex;
  justify-content: space-between;
  margin: 40px 100px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 0 20px;
  background: white;
  color: #4386bf;
  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
  border-right: 1px solid #ccc;
  outline: none;
`;

const Circle = styled.div`
  width: 68px;
  height: 68px;
  border: 5px solid #379cf6;
  border-radius: 50%;
  border-right: 5px solid #ccc;
  margin-top: 10px;
`;

const Completed = styled.p`
  fontFamily: 'Montserrat';
  color: #121212;
  display: flex;
  flex-direction: column;
  font-size: 32px;
`;
const currentChapter = {
  textTransform: 'uppercase',
  fontSize: '13px',
  color: '#ccc',
};

const categoryStyle = {
  fontFamily: 'Montserrat',
  color: '#121212',
  fontWeight: 'bold',
};

const completedStyle = {
  fontSize: '14px',
  color: '#ccc',
};

const updated = {
  background: '#0290ff',
  fontSize: '13px',
  color: 'white',
  textTransform: 'uppercase',
  borderRadius: '5px',
  padding: '10px',
};

export default function Book({
  id, title, category, removeBook,
}) {
  return (
    <Section>
      <div>
        <p style={categoryStyle}>{category}</p>
        <p>{title}</p>
        <Button style={{ paddingLeft: '0' }}>Comment</Button>
        <Button type="button" onClick={() => removeBook(id)}>Remove</Button>
        <Button style={{ borderRight: 'none' }}>Edit</Button>
      </div>
      <div>
        <Circle />
        <Completed>
          75%
          <span style={completedStyle}>Completed</span>
        </Completed>
      </div>
      <div style={{ fontFamily: 'Roboto Slab' }}>
        <h3 style={currentChapter}>current chapter</h3>
        <p style={{ fontWeight: 'normal' }}>Chapter 10</p>
        <Button style={updated}>Update Progress</Button>
      </div>
    </Section>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
