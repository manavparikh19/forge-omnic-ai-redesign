import React from "react";

export default function PlayerSync() {
  return (
    <section className="border border-neonPurple rounded-lg p-6 bg-cardBg">
      <h3 className="font-bold text-neonPurple mb-4">PLAYER SYNC</h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-gray-400 mr-2">Compare with:</label>
          <input
            type="text"
            placeholder="Pro name"
            className="p-1 bg-panelBg rounded w-40"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p>
            <strong>You:</strong>
          </p>
          <p>SR: 3247</p>
          <p>Win %: 87%</p>
        </div>
        <div>
          <p>
            <strong>Pro:</strong>
          </p>
          <p>SR: 3400</p>
          <p>Win %: 92%</p>
        </div>
      </div>
    </section>
  );
}
