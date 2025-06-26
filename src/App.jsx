import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PlayerSummary from "./components/PlayerSummary";
import MostRecentPlayLike from "./components/MostRecentPlayLike";
import CareerAverages from "./components/CareerAverages";
import DataInputToggle from "./components/DataInputToggle";
import InputSourceCards from "./components/InputSourceCards";
import NeuralOutputLog from "./components/NeuralOutputLog";
import TestModules from "./components/TestModules";
import RankAnalysis from "./components/RankAnalysis";
import PlayerSync from "./components/PlayerSync";
import PerformanceCore from "./components/PerformanceCore";
import SystemAnalysis from "./components/SystemAnalysis";
import HistoryDatabase from "./components/HistoryDatabase";
import Footer from "./components/Footer";

export default function App() {
  const [inputMode, setInputMode] = useState("STREAM");

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section>
          <PlayerSummary />
        </section>

        <section className="two-column">
          <MostRecentPlayLike />
          <CareerAverages />
        </section>

        <section>
          <DataInputToggle inputMode={inputMode} setInputMode={setInputMode} />
        </section>

        <section>
          <InputSourceCards />
        </section>

        <section>
          <NeuralOutputLog />
        </section>

        <section>
          <TestModules />
        </section>

        <section className="two-column">
          <RankAnalysis />
          <PlayerSync />
        </section>

        <section>
          <PerformanceCore />
        </section>

        <section>
          <SystemAnalysis />
        </section>

        <section>
          <HistoryDatabase />
        </section>
      </main>
      <Footer />
    </div>
  );
}
