import React from "react";

export default function SystemAnalysis() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-neonCyan rounded-lg p-6 bg-cardBg">
        <h4 className="font-bold text-neonCyan mb-2">SYSTEM_STRENGTHS</h4>
        <ul className="list-disc list-inside text-sm text-gray-400">
          <li>TARGET_PRECISION</li>
          <li>FLICK_ACCURACY</li>
          <li>MAP_AWARENESS</li>
        </ul>
      </div>
      <div className="border border-neonPurple rounded-lg p-6 bg-cardBg">
        <h4 className="font-bold text-neonPurple mb-2">OPTIMIZATION_TARGETS</h4>
        <ul className="list-disc list-inside text-sm text-gray-400">
          <li>TRACKING_CONSISTENCY</li>
          <li>REACTION_TIME</li>
          <li>PEEK_PUNISH</li>
        </ul>
      </div>
    </section>
  );
}
