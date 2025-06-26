import React from "react";
import { Youtube, Twitch, Globe, FileText } from "lucide-react";
import "./InputSourceCards.css";

/**
 * Renders cards based on `mode` prop:
 * - STREAM: YouTube & Twitch
 * - WEB:   URL (Globe)
 * - FILE:  File upload (Document)
 */
export default function InputSourceCards({ mode, onSelect }) {
  if (mode === "STREAM") {
    return (
      <section className="isc-grid">
        <div
          className="isc-card isc-card--yt"
          onClick={() => onSelect("YOUTUBE")}
        >
          <Youtube className="isc-icon" />
          <h4 className="isc-title">YOUTUBE</h4>
          <p className="isc-desc">Auto-analysis of tagged matches</p>
        </div>
        <div
          className="isc-card isc-card--tw"
          onClick={() => onSelect("TWITCH")}
        >
          <Twitch className="isc-icon" />
          <h4 className="isc-title">TWITCH</h4>
          <p className="isc-desc">Live stream analysis</p>
        </div>
      </section>
    );
  }

  if (mode === "WEB") {
    return (
      <section className="isc-grid-single">
        <div
          className="isc-card isc-card--web"
          onClick={() => onSelect("WEB_URL")}
        >
          <Globe className="isc-icon" />
          <h4 className="isc-title">WEB</h4>
          <p className="isc-desc">Analyze via public URL</p>
        </div>
      </section>
    );
  }

  // FILE mode
  return (
    <section className="isc-grid-single">
      <div
        className="isc-card isc-card--file"
        onClick={() => onSelect("FILE_UPLOAD")}
      >
        <FileText className="isc-icon" />
        <h4 className="isc-title">FILE</h4>
        <p className="isc-desc">Upload recorded match file</p>
      </div>
    </section>
  );
}
