// src/components/InputSourceCards.jsx
import React from "react";
import { Youtube, Twitch } from "lucide-react";

export default function InputSourceCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-red-600 rounded-lg p-6 bg-cardBg text-red-600 text-center">
        <Youtube className="mx-auto mb-2 w-8 h-8" />
        <h4 className="font-bold">YOUTUBE</h4>
        <p className="text-sm text-gray-400">Auto-analysis of tagged matches</p>
      </div>
      <div className="border border-neonPurple rounded-lg p-6 bg-cardBg text-neonPurple text-center">
        <Twitch className="mx-auto mb-2 w-8 h-8" />
        <h4 className="font-bold">TWITCH</h4>
        <p className="text-sm text-gray-400">Live stream analysis</p>
      </div>
    </section>
  );
}
