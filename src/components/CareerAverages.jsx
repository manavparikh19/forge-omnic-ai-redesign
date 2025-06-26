import React from "react";
import "./CareerAverages.css";
import { TrendingUp } from "lucide-react";

export default function CareerAverages() {
  const stats = [
    { label: "Eliminations", value: "5.8" },
    { label: "Deaths", value: "1.1" },
    { label: "Assists", value: "0" },
    { label: "Headshots", value: "1.6" },
    { label: "Healing", value: "54" },
    { label: "Wallbangs", value: "0" },
    { label: "Seconds Dead", value: "130" },
    { label: "Seconds Alive", value: "600" },
    { label: "Shielding", value: "0" },
    { label: "Was Assisted", value: "0" },
    { label: "Credits Earned", value: "17,000" },
    { label: "Credits Spent", value: "15,000" },
    { label: "Damage Taken", value: "570" },
    { label: "First Bloods", value: "1.1" },
    { label: "First Blooded", value: "0" },
    { label: "Shield Damage Taken", value: "0" },
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
      <p className="ca-footnote">* per ten minutes of gameplay</p>
    </section>
  );
}
