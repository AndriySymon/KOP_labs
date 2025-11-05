import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 8px 4px;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;

export default function Button({ onClick, children, type = "button" }) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}