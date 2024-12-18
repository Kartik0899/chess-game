import React from "react";
import "./Ranks.css";

const Ranks = ({ ranks }) => {
  return (
    <div className="ranks">
      {ranks.map((rank) => (
        <div key={rank}>{rank}</div>
      ))}
    </div>
  );
};

export default Ranks;
