import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold">Company</h4>
          <p className="text-sm">Blinkit clone demo • Not the real Blinkit</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow us</h4>
          <div className="flex gap-3 mt-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
