import React, { useState, useRef, useEffect } from "react";
import { User, Search, ChevronDown, Check } from "lucide-react";
import "./PlayerSync.css";

const PRO_PLAYERS = [
  { name: "Sinatraa", team: "Sentinels" },
  { name: "Shroud", team: "Ex-Cloud9" },
  { name: "TenZ", team: "Sentinels" },
  { name: "Ninja", team: "Content Creator" },
];

export default function PlayerSync() {
  const [selected, setSelected] = useState(PRO_PLAYERS[0]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const filtered = PRO_PLAYERS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // dummy stats
  const yourStats = { rank: "Diamond", sr: 3247, accuracy: "67%", kd: 1.8 };
  const proStats = {
    rank: selected.name === "Shroud" ? "Immortal" : "Radiant",
    sr: selected.name === "Shroud" ? 4000 : 4567,
    accuracy: selected.name === "Shroud" ? "82%" : "89%",
    kd: selected.name === "Shroud" ? 2.1 : 2.4,
  };

  return (
    <section className="psync">
      {/* Header */}
      <div className="psync-header">
        <div className="psync-icon">
          <User size={20} />
        </div>
        <h3 className="psync-title">PLAYER SYNC</h3>
      </div>

      {/* Controls */}
      <div className="psync-controls">
        <label className="psync-label">Compare Against Pro Player</label>

        {/* Dropdown */}
        <div className="psync-dropdown" ref={dropdownRef}>
          <button className="psync-dropdown-btn" onClick={() => setOpen(!open)}>
            <span>{selected.name}</span>
            <span className="psync-team">{selected.team}</span>
            <ChevronDown className="psync-caret" size={16} />
          </button>
          {open && (
            <ul className="psync-options">
              {filtered.map((p) => (
                <li
                  key={p.name}
                  className="psync-option"
                  onClick={() => {
                    setSelected(p);
                    setOpen(false);
                  }}
                >
                  <Check
                    size={14}
                    className={`psync-check ${
                      selected.name === p.name ? "checked" : ""
                    }`}
                  />
                  <span>{p.name}</span>
                  <span className="psync-team">{p.team}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search */}
        <div className="psync-search">
          <input
            type="text"
            className="psync-search-input"
            placeholder="Search other players..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="psync-search-btn">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="psync-cards">
        <div className="psync-card">
          <h4 className="psync-card-title">Your Stats</h4>
          <ul className="psync-stats">
            <li>
              <span>Rank</span>
              <span className="psync-badge">{yourStats.rank}</span>
            </li>
            <li>
              <span>SR</span>
              <span>{yourStats.sr}</span>
            </li>
            <li>
              <span>Accuracy</span>
              <span>{yourStats.accuracy}</span>
            </li>
            <li>
              <span>K/D Ratio</span>
              <span>{yourStats.kd}</span>
            </li>
          </ul>
        </div>
        <div className="psync-card">
          <h4 className="psync-card-title">{selected.name} Stats</h4>
          <ul className="psync-stats">
            <li>
              <span>Rank</span>
              <span className={`psync-radiant-badge`}>{proStats.rank}</span>
            </li>
            <li>
              <span>SR</span>
              <span>{proStats.sr}</span>
            </li>
            <li>
              <span>Accuracy</span>
              <span>{proStats.accuracy}</span>
            </li>
            <li>
              <span>K/D Ratio</span>
              <span>{proStats.kd}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
