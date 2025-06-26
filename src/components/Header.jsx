import React, { useState } from "react";
import { Bell, User, Menu, X } from "lucide-react";
import "./Header.css";
import { Icons } from "../assets";
import GameDropdown from "./GameDropdown";

export default function Header({ onAnalyze }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img
            src={Icons.omnic_logo}
            alt="Omnic Forge"
            className="header-logo"
          />
          <h1 className="header-title">Omnic Forge</h1>
        </div>

        {/* desktop right */}
        <div className="header-right hidden-mobile">
          <GameDropdown />
          <button className="header-btn" onClick={onAnalyze}>
            Analyze a Match
          </button>
          <div className="header-icon-box">
            <Bell size={20} className="header-icon" />
          </div>
          <div className="header-icon-box">
            <User size={20} className="header-icon" />
          </div>
        </div>

        {/* mobile menu button */}
        <button
          className="header-menu-btn hide-desktop"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Drawer overlay */}
      <div
        className={`mobile-drawer-backdrop ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer panel */}
      <aside
        className={`mobile-drawer ${drawerOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <X
            size={24}
            className="drawer-close-btn"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
        <nav className="drawer-nav">
          <GameDropdown />
          <button className="header-btn drawer-analyze" onClick={onAnalyze}>
            Analyze a Match
          </button>
          <div className="drawer-icons">
            <div className="header-icon-box">
              <Bell size={20} className="header-icon" />
            </div>
            <div className="header-icon-box">
              <User size={20} className="header-icon" />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
