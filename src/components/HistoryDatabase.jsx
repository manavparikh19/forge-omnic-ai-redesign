import React, { useState, useRef, useEffect } from "react";
import { ChartNoAxesCombined, Clock } from "lucide-react";
import "./HistoryDatabase.css";

const MATCH_DATA = [
  {
    date: "2024-06-24",
    map: "Bind",
    score: "24/12/8",
    agent: "Jett",
    result: "WIN",
  },
  {
    date: "2024-06-23",
    map: "Ascent",
    score: "18/15/6",
    agent: "Reyna",
    result: "LOSS",
  },
  {
    date: "2024-06-22",
    map: "Haven",
    score: "31/14/12",
    agent: "Jett",
    result: "WIN",
  },
];

const COMBINE_DATA = [
  { date: "2025-06-24", twitch: 87, targeting: 92, tracking: 78 },
  { date: "2025-06-25", twitch: 82, targeting: 88, tracking: 81 },
  { date: "2025-06-26", twitch: 90, targeting: 95, tracking: 85 },
  { date: "2025-06-27", twitch: 75, targeting: 80, tracking: 72 },
  { date: "2025-06-28", twitch: 88, targeting: 91, tracking: 79 },
];

const INSIGHTS_DATA = [
  {
    date: "2025-06-24 4:26am",
    category: "Performance",
    insight:
      "You pre-aimed at an opponent's head 1 times. This was 4% of all pre-aim instances.",
  },
  {
    date: "2025-06-24 4:26am",
    category: "Performance",
    insight:
      "As Neon on attack, you are an entry agent. Push onto the site together with your other duelist to help secure the site.",
  },
  {
    date: "2025-06-25 10:14am",
    category: "Strategy",
    insight:
      "Your use of smoke grenades blocked enemy vision for an average of 12 seconds per round, disrupting 68% of enemy pushes.",
  },
  {
    date: "2025-06-25 4:50pm",
    category: "Tactics",
    insight:
      "You rotated to mid control in 8 seconds on average, faster than 75% of players at your rank.",
  },
  {
    date: "2025-06-26 9:30am",
    category: "Accuracy",
    insight:
      "Your long-range tap-fire accuracy was 45%, above the 32% average for Diamond rank.",
  },
];

export default function HistoryDatabase() {
  const [tab, setTab] = useState("match");
  const ref = useRef();

  // optional: close dropdowns or popups on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        // nothing for now
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <section className="hd-container" ref={ref}>
      {/* Header */}
      <div className="hd-header">
        <Clock size={30} className="hd-icon" />
        <h3 className="hd-title">HISTORY_DATABASE.SYS</h3>
      </div>

      {/* Tabs */}
      <nav className="hd-tabs">
        <button
          className={`hd-tab ${tab === "match" ? "active" : ""}`}
          onClick={() => setTab("match")}
        >
          MATCH HISTORY
        </button>
        <button
          className={`hd-tab ${tab === "combine" ? "active" : ""}`}
          onClick={() => setTab("combine")}
        >
          COMBINE HISTORY
        </button>
        <button
          className={`hd-tab ${tab === "insights" ? "active" : ""}`}
          onClick={() => setTab("insights")}
        >
          INSIGHTS HISTORY
        </button>
      </nav>

      {/* Match History */}
      {tab === "match" && (
        <table className="hd-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>MAP</th>
              <th>SCORE</th>
              <th>AGENT</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {MATCH_DATA.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.map}</td>
                <td>{row.score}</td>
                <td>{row.agent}</td>
                <td>
                  <span
                    className={`hd-badge ${
                      row.result === "WIN" ? "hd-win" : "hd-loss"
                    }`}
                  >
                    {row.result}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Combine History */}
      {tab === "combine" && (
        <table className="hd-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>TWITCH SCORE</th>
              <th>TARGETING SCORE</th>
              <th>TRACKING SCORE</th>
            </tr>
          </thead>
          <tbody>
            {COMBINE_DATA.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.twitch}</td>
                <td>{row.targeting}</td>
                <td>{row.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Insights History */}
      {tab === "insights" && (
        <table className="hd-table">
          <thead>
            <tr>
              <th></th>
              <th>DATE</th>
              <th>CATEGORY</th>
              <th>FORGE AI INSIGHT</th>
            </tr>
          </thead>
          <tbody>
            {INSIGHTS_DATA.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <ChartNoAxesCombined size={30} className="hd-insight-icon" />
                </td>
                <td>{row.date}</td>
                <td>{row.category}</td>
                <td>{row.insight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
