import React from "react";
import { Trophy, Star, Zap, ExternalLink, Activity } from "lucide-react";
import "./MostRecentPlayLike.css";

const PROS = [
  {
    name: "TenZ",
    similarity: "92%",
    role: "Jett Main",
    desc: "Aggressive entry fragger style",
    badge: "MATCH",
    badgeClass: "match",
    Icon: Trophy,
    iconBg: "cyan",
  },
  {
    name: "Shroud",
    similarity: "89%",
    role: "Flex Player",
    desc: "Consistent aim & positioning",
    badge: "SIMILAR",
    badgeClass: "similar",
    Icon: Star,
    iconBg: "purple",
  },
  {
    name: "ScreaM",
    similarity: "85%",
    role: "Duelist",
    desc: "High headshot percentage",
    badge: "STYLE",
    badgeClass: "style",
    Icon: Zap,
    iconBg: "gold",
  },
];

export default function MostRecentPlayLike() {
  return (
    <section className="mrpl-container">
      <div className="mrpl-header">
        <Activity size={30} className="mrpl-header-icon" />
        <h3 className="mrpl-header-title">MOST RECENT PLAY LIKE</h3>
      </div>
      <div className="mrpl-list">
        {PROS.map((p) => (
          <div key={p.name} className="mrpl-item">
            <div className="mrpl-left">
              <div className={`mrpl-icon bg-${p.iconBg}`}>
                <p.Icon size={20} color="#020307" />
              </div>
              <div className="mrpl-content">
                <p className="mrpl-name">{p.name}</p>
                <p className={`mrpl-similarity text-${p.iconBg}`}>
                  {p.similarity} Similarity • {p.role}
                </p>
                <p className="mrpl-desc">{p.desc}</p>
              </div>
            </div>
            <div className="mrpl-right">
              <span className={`mrpl-badge ${p.badgeClass}`}>{p.badge}</span>
              <button className="mrpl-watch-btn">
                <ExternalLink size={14} />
                Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
