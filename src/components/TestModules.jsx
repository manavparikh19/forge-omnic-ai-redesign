import React from "react";
import { Gamepad, Crosshair, Eye } from "lucide-react";
import "./TestModules.css";

const modules = [
  {
    key: "twitch",
    title: "TWITCH",
    Icon: Gamepad,
    desc: "Stream analysis & metrics",
    btnText: "Connect",
    modifier: "twitch",
  },
  {
    key: "targeting",
    title: "TARGETING",
    Icon: Crosshair,
    desc: "Precision & accuracy test",
    btnText: "Start Test",
    modifier: "targeting",
  },
  {
    key: "tracking",
    title: "TRACKING",
    Icon: Eye,
    desc: "Movement & follow test",
    btnText: "Start Test",
    modifier: "tracking",
  },
];

export default function TestModules() {
  return (
    <section className="tm-container">
      {modules.map(({ key, title, Icon, desc, btnText, modifier }) => (
        <div key={key} className={`tm-card tm-card--${modifier}`}>
          <div className="tm-icon-container">
            <Icon size={24} />
          </div>
          <h4 className="tm-title">{title}</h4>
          <p className="tm-desc">{desc}</p>
          <button className="tm-button">{btnText}</button>
        </div>
      ))}
    </section>
  );
}
