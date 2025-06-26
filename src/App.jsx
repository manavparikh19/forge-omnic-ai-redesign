import { useState } from "react";
import "./App.css";

import AnalyzeModal from "./components/AnalyzeModal";
import CareerAverages from "./components/CareerAverages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HistoryDatabase from "./components/HistoryDatabase";
import MostRecentPlayLike from "./components/MostRecentPlayLike";
import PlayerSummary from "./components/PlayerSummary";
import TestModules from "./components/TestModules";
import RankAnalysis from "./components/RankAnalysis";
import PlayerSync from "./components/PlayerSync";

export default function App() {
  const [inputMode, setInputMode] = useState("STREAM");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <Header onAnalyze={() => setModalOpen(true)} />
      <main className="main-content">
        <section>
          <PlayerSummary />
        </section>

        <section>
          <MostRecentPlayLike />
        </section>

        <section>
          <CareerAverages />
        </section>

        <section>
          <TestModules />
        </section>

        <section className="two-column">
          <RankAnalysis />
          <PlayerSync />
        </section>

        <section>
          <HistoryDatabase />
        </section>
      </main>
      <Footer />
      <AnalyzeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        inputMode={inputMode}
        setInputMode={setInputMode}
      />
    </div>
  );
}
