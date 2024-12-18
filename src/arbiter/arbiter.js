import {
  getBishopMoves,
  getKingsMoves,
  getKnightMoves,
  getPawnCaptures,
  getPawnMoves,
  getQueenMoves,
  getRookMoves,
} from "./getMoves";
import { movePawn, movePiece } from "./move";

const arbiter = {
  getRegularMoves: function ({ position, rank, file, piece }) {
    if (piece.endsWith("n")) {
      return getKnightMoves({ position, rank, file });
    }
    if (piece.endsWith("b")) {
      return getBishopMoves({ position, rank, file, piece });
    }
    if (piece.endsWith("r")) {
      return getRookMoves({ position, rank, file, piece });
    }
    if (piece.endsWith("q")) {
      return getQueenMoves({ position, rank, file, piece });
    }
    if (piece.endsWith("k")) {
      return getKingsMoves({ position, rank, file, piece });
    }
    if (piece.endsWith("p")) {
      return getPawnMoves({ position, rank, file, piece });
    }
  },

  getValidMoves: function ({ position, prevPosition, rank, file, piece }) {
    let moves = this.getRegularMoves({ position, rank, file, piece });

    if (piece.endsWith("p")) {
      moves = [
        ...moves,
        ...getPawnCaptures({ position, prevPosition, rank, file, piece }),
      ];
    }

    return moves;
  },

  performMove: function ({ position, piece, rank, file, x, y }) {
    if (piece.endsWith("p")) {
      return movePawn({ position, piece, rank, file, x, y });
    } else {
      return movePiece({ position, piece, rank, file, x, y });
    }
  },
};

export default arbiter;
