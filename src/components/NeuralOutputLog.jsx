import React from "react";

export default function NeuralOutputLog() {
  const metrics = [
    { label: "PRECISION RATE", value: "87%", color: "neonCyan" },
    { label: "ELIMINATIONS", value: "24", color: "neonCyan" },
    { label: "K/D RATIO", value: "2.39", color: "neonCyan" },
    { label: "TIER STATUS", value: "DIAMOND", color: "neonGold" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className={`border border-${m.color} rounded p-4 text-center bg-cardBg`}
        >
          <p className="font-bold">{m.label}</p>
          <p
            className={`text-xl ${
              m.color === "neonGold" ? "text-neonGold" : ""
            }`}
          >
            {m.value}
          </p>
        </div>
      ))}
    </section>
  );
}
