import React from "react";

export default function HistoryDatabase() {
  return (
    <section className="border border-borderGray rounded-lg p-6 bg-cardBg">
      <h3 className="font-bold text-gray-300 mb-4">HISTORY_DATABASE.SYS</h3>
      <div className="mb-4">
        <button className="mr-2 px-3 py-1 bg-neonCyan text-black rounded">
          Match History
        </button>
        <button className="mr-2 px-3 py-1 bg-panelBg text-gray-400 rounded">
          Combine History
        </button>
        <button className="px-3 py-1 bg-panelBg text-gray-400 rounded">
          Insights History
        </button>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Map</th>
            <th>Score</th>
            <th>Agent</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-06-24</td>
            <td>Ascent</td>
            <td>24/13/8</td>
            <td>Jett</td>
            <td className="text-green-400">Win</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
