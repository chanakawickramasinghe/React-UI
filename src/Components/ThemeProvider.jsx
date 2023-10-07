import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.body};
`;

function ThemeProvider() {
  return (
    <div>
      <StyledButton>Primary Button</StyledButton>
    </div>
  );
}

export default ThemeProvider;
