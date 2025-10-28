import React from "react";

export default function Tile({ number, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      {number}
      </div>
  );
}