import React from "react";

import "./Board.css";
import Ranks from "./bits/Ranks";
import Files from "./bits/Files";
import Pieces from "../Pieces/Pieces";
import { useAppContext } from "../../contexts/Context";
import Popup from "../Popup/Popup";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);

  const files = Array(8)
    .fill()
    .map((x, i) => i + 1);

  const { appState } = useAppContext();
  const position = appState.position[appState.position.length - 1];

  const getClassName = (i, j) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--dark" : " tile--light";

    if (appState.candidateMoves?.find((m) => m[0] === i && m[1] === j)) {
      if (position[i][j]) {
        c += " attacking";
      } else {
        c += " highlight";
      }
    }

    return c;
  };

  return (
    <div className="board">
      <Ranks ranks={ranks} />

      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={`${rank}${file}`} className={getClassName(7 - i, j)}>
              {/* {rank}
              {file} */}
            </div>
          ))
        )}
      </div>

      <Pieces />

      <Popup />

      <Files files={files} />
    </div>
  );
};

export default Board;
