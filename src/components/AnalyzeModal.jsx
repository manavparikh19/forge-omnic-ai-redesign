import React, { useEffect, useRef } from "react";
import DataInputToggle from "./DataInputToggle";
import InputSourceCards from "./InputSourceCards";
import "./AnalyzeModal.css";

export default function AnalyzeModal({
  isOpen,
  onClose,
  inputMode,
  setInputMode,
}) {
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSourceSelect = (source) => {
    // e.g. route logic based on source
    alert(`Selected: ${source}`);
  };

  return (
    <div className="dimmed-overlay">
      <div className={`modal-box ${inputMode.toLowerCase()}`} ref={ref}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">Analyze a Match</h2>

        {/* Mode tabs */}
        <DataInputToggle inputMode={inputMode} setInputMode={setInputMode} />

        {/* Source cards switch */}
        <div className="modal-body">
          <InputSourceCards mode={inputMode} onSelect={handleSourceSelect} />
        </div>
      </div>
    </div>
  );
}
