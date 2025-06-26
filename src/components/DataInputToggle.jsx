import React from "react";
import "./DataInputToggle.css";

export default function DataInputToggle({ inputMode, setInputMode }) {
  const modes = ["STREAM", "WEB", "FILE"];
  return (
    <section className={`data-input-toggle ${inputMode.toLowerCase()}`}>
      {modes.map((mode) => {
        return (
          <button
            key={mode}
            onClick={() => setInputMode(mode)}
            className={`${mode.toLowerCase()} ${
              inputMode === mode ? "active" : ""
            }`}
          >
            {mode}
          </button>
        );
      })}
    </section>
  );
}
