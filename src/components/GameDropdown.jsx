import React, { useState, useRef, useEffect } from "react";
import "./GameDropdown.css";

const GAMES = [
  "Fortnite",
  "Madden NFL",
  "Overwatch 2",
  "Rocket League",
  "Valorant",
];

export default function GameDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Valorant");
  const ref = useRef();

  // close on outside click
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="game-dropdown" ref={ref}>
      <div className="game-toggle">
        <span className="selected-game">
          {selected}
          {selected === "Madden NFL" && (
            <span className="beta-badge">Beta</span>
          )}
        </span>
        <span className="arrow" onClick={() => setOpen((o) => !o)}>
          ▾
        </span>
      </div>

      {open && (
        <ul className="game-menu">
          {GAMES.map((g) => (
            <li
              key={g}
              className={g === selected ? "game-item selected" : "game-item"}
              onClick={() => {
                setSelected(g);
                setOpen(false);
              }}
            >
              {g}
              {g === "Madden NFL" && <span className="beta-badge">Beta</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
