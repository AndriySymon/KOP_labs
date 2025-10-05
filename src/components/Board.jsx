import React from "react";
import Tile from "./Tile";

export default function Board() {
  const tiles = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="board">
      {tiles.map((n) => (
        <Tile key={n} number={n} />
      ))}
      <div className="tile empty"></div>
    </div>
  );
}