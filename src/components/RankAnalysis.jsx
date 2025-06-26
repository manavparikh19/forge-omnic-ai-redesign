import React, { useState } from "react";
import { Trophy, Monitor, Gamepad } from "lucide-react";
import "./RankAnalysis.css";

export default function RankAnalysis() {
  const [gameMode, setGameMode] = useState("Competitive");
  const [platform, setPlatform] = useState("PC");

  const data = [
    { rank: "Diamond", sr: 3247, wins: 23, losses: 18, winRate: "56%" },
    { rank: "Platinum", sr: 2834, wins: 45, losses: 32, winRate: "58%" },
    { rank: "Gold", sr: 2156, wins: 67, losses: 43, winRate: "61%" },
  ];

  const avgSR = (data.reduce((sum, d) => sum + d.sr, 0) / data.length).toFixed(
    1
  );
  const totalWins = data.reduce((sum, d) => sum + d.wins, 0);
  const totalLosses = data.reduce((sum, d) => sum + d.losses, 0);
  const avgWinRate =
    Math.round(
      data.reduce((sum, d) => sum + parseInt(d.winRate), 0) / data.length
    ) + "%";

  return (
    <section className="ra-container">
      <header className="ra-header">
        <div className="ra-header-icon">
          <Trophy size={32} />
        </div>
        <h2 className="ra-title">RANK ANALYSIS</h2>
      </header>
      <div className="ra-filters">
        <div className="ra-filter">
          <label>Game Mode</label>
          <select
            className="ra-select"
            value={gameMode}
            onChange={(e) => setGameMode(e.target.value)}
          >
            <option>Competitive</option>
            <option> Quickplay</option>
          </select>
        </div>
        <div className="ra-filter">
          <label>Platform</label>
          <div className="ra-platform-select">
            {platform === "PC" ? (
              <Monitor size={20} className="ra-icon" />
            ) : (
              <Gamepad className="ra-icon" />
            )}
            <select
              className="ra-select"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="PC">PC</option>
              <option value="Console">Console</option>
            </select>
          </div>
        </div>
      </div>
      <table className="ra-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>SR</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.rank}>
              <td>
                <span
                  className={`ra-badge ra-badge--${row.rank.toLowerCase()}`}
                >
                  {row.rank}
                </span>
              </td>
              <td>{row.sr}</td>
              <td className="ra-win">{row.wins}</td>
              <td className="ra-loss">{row.losses}</td>
              <td>{row.winRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ra-summary">
        <div className="ra-card">
          <p className="ra-card-value">{avgSR}</p>
          <p className="ra-card-label">Avg SR</p>
        </div>
        <div className="ra-card">
          <p className="ra-card-value">{totalWins}</p>
          <p className="ra-card-label">Total Wins</p>
        </div>
        <div className="ra-card">
          <p className="ra-card-value">{totalLosses}</p>
          <p className="ra-card-label">Total Losses</p>
        </div>
        <div className="ra-card">
          <p className="ra-card-value">{avgWinRate}</p>
          <p className="ra-card-label">Avg Win Rate</p>
        </div>
      </div>
    </section>
  );
}
