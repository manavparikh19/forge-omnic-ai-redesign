import React from "react";

export default function DataInputToggle({ inputMode, setInputMode }) {
  const modes = ["STREAM", "WEB", "FILE"];
  return (
    <section className="border border-neonCyan rounded-lg p-4 bg-cardBg flex gap-4">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => setInputMode(mode)}
          className={`flex-1 py-2 rounded ${
            inputMode === mode
              ? "bg-neonCyan text-black"
              : "bg-transparent text-gray-400 border border-neonCyan"
          }`}
        >
          {mode}
        </button>
      ))}
    </section>
  );
}
