import React from "react";

export default function Small_banner        () {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src="src/assets/b2.avif"
            alt="banner1"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src="src/assets/b3.avif"
            alt="banner2"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src="src/assets/b4.avif"
            alt="banner3"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
