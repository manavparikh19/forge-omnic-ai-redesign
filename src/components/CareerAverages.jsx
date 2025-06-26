import React from "react";
import "./CareerAverages.css";
import { TrendingUp } from "lucide-react";

export default function CareerAverages() {
  const stats = [
    { label: "AVG KILLS", value: "21.4" },
    { label: "AVG DEATHS", value: "12.8" },
    { label: "AVG ASSISTS", value: "8.2" },
    { label: "AVG ACS", value: "267" },
    { label: "HEADSHOT %", value: "32%" },
    { label: "RATING", value: "1.67" },
  ];

  return (
    <section className="ca-container">
      <h3 className="ca-title">
        <TrendingUp size={30} className="ca-title-icon" />
        CAREER AVERAGES
      </h3>
      <div className="ca-grid">
        {stats.map((s) => (
          <div key={s.label} className="ca-card">
            <p className="ca-value">{s.value}</p>
            <p className="ca-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
