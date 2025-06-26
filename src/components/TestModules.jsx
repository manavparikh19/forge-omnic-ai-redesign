import React from "react";
import { LayoutGrid, Crosshair, Eye } from "lucide-react";

export default function TestModules() {
  const modules = [
    {
      name: "STREAM_MODULE",
      icon: LayoutGrid,
      desc: "Stream metrics analysis",
    },
    { name: "TARGET_MODULE", icon: Crosshair, desc: "Precision & accuracy" },
    { name: "TRACK_MODULE", icon: Eye, desc: "Movement tracking" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {modules.map((m) => (
        <div
          key={m.name}
          className="border border-neonCyan rounded-lg p-6 bg-cardBg flex flex-col items-center"
        >
          <m.icon className="mb-4 text-neonCyan" size={32} />
          <h4 className="font-bold mb-2">{m.name}</h4>
          <p className="text-sm text-gray-400 mb-4">{m.desc}</p>
          <button className="px-4 py-2 bg-neonCyan text-black rounded">
            Run
          </button>
        </div>
      ))}
    </section>
  );
}
