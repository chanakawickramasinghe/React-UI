import React from 'react';
import styled from 'styled-components';
// import { Button } from '../Styles/button';

const Button = styled.button`
background-color: #007bff;
color: white;
padding: 10px 20px;
border: 2px solid transparent; /* Added transparent border to maintain button size */
border-radius: 4px;
cursor: pointer;
margin: 50px;

&:hover {
  background-color: #0056b3; /* Change background color on hover */
  border-color: #0056b3; /* Change border color on hover */
}
`;

function MyStyles() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

export default MyStyles;