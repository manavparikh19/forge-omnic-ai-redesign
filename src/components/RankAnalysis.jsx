import React from "react";

export default function RankAnalysis() {
  return (
    <section className="border border-neonCyan rounded-lg p-6 bg-cardBg">
      <h3 className="font-bold text-neonCyan mb-4">RANK ANALYSIS</h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-gray-400 mr-2">Game Mode:</label>
          <select className="p-1 bg-panelBg rounded">
            <option>Competitive</option>
            <option>Unrated</option>
          </select>
        </div>
        <div>
          <label className="text-gray-400 mr-2">Platform:</label>
          <select className="p-1 bg-panelBg rounded">
            <option>PC</option>
            <option>Console</option>
          </select>
        </div>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            <th>Tier</th>
            <th>SR</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diamond</td>
            <td>3247</td>
            <td>87</td>
            <td>13</td>
            <td>87%</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </section>
  );
}
