import React from "react";

export default function Footer() {
  return (
    <footer className="bg-panelBg p-6 text-sm text-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold text-white mb-2">Company</h4>
          <ul>
            <li>About Us</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Merch Store</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Support</h4>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center">© 2025 Omnic.AI</p>
    </footer>
  );
}
