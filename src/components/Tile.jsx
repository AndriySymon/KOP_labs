import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  background: ${({ theme }) => theme.colors.tile};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  user-select: none;
  cursor: pointer;

  &.empty {
    background: transparent;
    border: 1px dashed ${({ theme }) => theme.colors.tileEmptyBorder};
    cursor: default;
  }
`;

export default function Tile({ number, onClick }) {
  return (
    <StyledTile onClick={onClick} className={!number ? "empty" : ""}>
      {number}
    </StyledTile>
  );
}