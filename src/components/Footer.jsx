// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { Icons } from "../assets";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-branding">
        <div className="footer-logo">
          <img
            src={Icons.omnic_logo}
            alt="Omnic Forge"
            className="header-logo"
          />
        </div>
        <span className="footer-title">Omnic.AI</span>
      </div>
      <div className="footer-columns">
        <div className="footer-col footer-col--company">
          <h4 className="footer-col-title">COMPANY</h4>
          <ul className="footer-col-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-col--resources">
          <h4 className="footer-col-title">RESOURCES</h4>
          <ul className="footer-col-list">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Merchandise Store</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-col--support">
          <h4 className="footer-col-title">SUPPORT</h4>
          <ul className="footer-col-list">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
