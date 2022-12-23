import React, { useEffect } from "react";
import { useSudokuContext } from "../context/SudokuContext";
// import moment from "moment";

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every minute.
 */
export const Timer = () => {
  let { countTimer, setCountTimer, won, paused, setPaused } =
    useSudokuContext();

  useEffect(() => {
    if (!paused && !won) setTimeout(() => tick(), 1000);
    
  });

  function tick() {
    setCountTimer(countTimer +1);
  
  }

  function formatTime(num: number): string {
    let stringTimer = "";
    var hours = Math.floor(num / 3600);
    var minutes = Math.floor((num - hours * 3600) / 60);
    var seconds = countTimer - (hours * 3600 + minutes * 60);
    stringTimer += hours ? "" + hours + ":" : "";
    stringTimer += minutes ? (minutes < 10 ? "0" : "") + minutes + ":" : "00:";
    stringTimer += seconds < 10 ? "0" + seconds : seconds;
    return stringTimer;
  }

  return (
    <div
      className="status__time"
      title="Click to pause game"
      onClick={() => setPaused(!paused)}
    >
      {formatTime(countTimer)}
    </div>
  );
};
