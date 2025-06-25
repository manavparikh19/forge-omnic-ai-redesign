import React from "react";
import { Bell, User } from "lucide-react";
import "./Header.css";
import { Icons } from "../assets";
import GameDropdown from "./GameDropdown";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Icons.omnic_logo} alt="Omnic Forge" className="header-logo" />
        <h1 className="header-title">Omnic Forge</h1>
        <GameDropdown />
      </div>
      <div className="header-right">
        <button className="header-btn">Analyze a Match</button>
        <div className="header-icon-box">
          <Bell size={20} className="header-icon" />
        </div>
        <div className="header-icon-box">
          <User size={20} className="header-icon" />
        </div>
      </div>
    </header>
  );
}
