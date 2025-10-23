import React from "react";
import Tile from "./Tile";

export default function Board({tiles, onTileClick}) {

  return (
    <div className="board">
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