import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const TILE_SIZE = 70;
const GAP = 8;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size}, 70px)`};
  grid-template-rows: ${({ size }) => `repeat(${size}, 70px)`};
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`;

export default function Board({ tiles, onTileClick, size }) {
  return (
    <StyledBoard size={size}>
      {tiles.map((n, i) =>
        n ? (
          <Tile key={n} number={n} onClick={() => onTileClick(i)} />
        ) : (
          <div key="empty" className="tile empty"></div>
        )
      )}
    </StyledBoard>
  );
}