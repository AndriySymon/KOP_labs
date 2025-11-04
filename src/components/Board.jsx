import React from "react";
import Tile from "./Tile";

export default function Board({tiles, onTileClick, size}) {

  return (
    <div
      className="board"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 70px)`,
        gridTemplateRows: `repeat(${size}, 70px)`,
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {tiles.map((n, i) =>
        n ? (
          <Tile key={n} number={n} onClick={() => onTileClick(i)} />
        ) : (
          <div key="empty" className="tile empty"></div>
        )
      )}
    </div>
  );
}