import React from "react";
import { User } from "lucide-react";
import "./PlayerSummary.css";

export default function PlayerSummary() {
  const stats = [
    { label: "ELIMINATIONS", value: 246, className: "ps-stat-green" },
    { label: "DEATHS", value: 103, className: "ps-stat-red" },
    { label: "K/D RATIO", value: "2.39", className: "ps-stat-cyan" },
    { label: "WIN RATE", value: "87%", className: "ps-stat-gold" },
  ];

  return (
    <div className="player-summary">
      <div className="ps-header">
        <div className="ps-avatar">
          <User size={24} color="#fff" />
        </div>
        <div>
          <h2 className="ps-name">PLAYER_001</h2>
          <p className="ps-rank">Diamond • 3247 SR</p>
        </div>
      </div>
      <div className="ps-bottom-panel">
        {/* Details */}
        <div className="ps-details">
          <div className="ps-row">
            <span className="ps-label">Current Game</span>
            <span className="ps-value ps-badge">VALORANT</span>
          </div>
          <div className="ps-row">
            <span className="ps-label">Best Weapon</span>
            <span className="ps-value ps-text-cyan">Vandal</span>
          </div>
          <div className="ps-row">
            <span className="ps-label">Main Agent</span>
            <span className="ps-value ps-text-purple">Jett</span>
          </div>
        </div>
        <div className="ps-stats">
          {stats.map((s) => (
            <div key={s.label} className={`ps-stat-card ${s.className}`}>
              <p className="ps-stat-value">{s.value}</p>
              <p className="ps-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
