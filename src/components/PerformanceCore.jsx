import React from "react";

export default function PerformanceCore() {
  const coreScore = 89.2;
  const modules = [
    { name: "STREAM_MODULE", score: 87 },
    { name: "TARGET_MODULE", score: 92 },
    { name: "TRACK_MODULE", score: 78 },
  ];

  return (
    <section className="border border-neonGold rounded-lg p-6 bg-cardBg">
      <h3 className="font-bold text-neonGold mb-4">NEURAL SCORE</h3>
      <p className="text-4xl font-bold mb-6">{coreScore}</p>
      <div className="grid grid-cols-3 gap-4">
        {modules.map((m) => (
          <div
            key={m.name}
            className="border border-neonCyan rounded p-4 text-center"
          >
            <p className="font-bold">{m.name}</p>
            <p>{m.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
