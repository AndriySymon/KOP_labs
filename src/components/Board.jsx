import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const TILE_SIZE = 70;
const GAP = 8;

/**
 * Styled container for the game board.
 *
 * Uses CSS Grid to arrange tiles based on board size.
 *
 * @param {Object} props
 * @param {number} props.size Board size (number of columns and rows)
 */
const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size}, 70px)`};
  grid-template-rows: ${({ size }) => `repeat(${size}, 70px)`};
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`;

/**
 * Game board component.
 *
 * Renders a square grid of tiles and one empty cell.
 * Handles rendering of tile components and empty space.
 *
 * @param {Object} props
 * @param {Array<number|null>} props.tiles Array of tile values
 * @param {Function} props.onTileClick Callback fired when a tile is clicked
 * @param {number} props.size Board size (3, 4 or 5)
 * @returns {JSX.Element} Game board UI
 */
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