import React from "react";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="rounded-lg overflow-hidden">
        <img
          src="src/assets/b1.webp"
          alt="banner"
          className="w-full h-auto object-cover sm:h-48"
          loading="lazy"
        />
      </div>
    </div>
  );
}
