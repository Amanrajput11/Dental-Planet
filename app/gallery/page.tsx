"use client";

import { useState } from "react";

export default function GalleryPage() {
  const images = [
    "/images/gallary1.jpeg",
    "/images/gallary2.jpeg",
    "/images/gallary3.jpeg",
    "/images/gallary4.jpeg",
    "/images/gallary5.jpeg",
    "/images/gallary6.jpeg",
    "/images/gallary7.jpeg",
  ];

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
      <main className="gallery-page">
        <div className="container">
          {/* HEADER */}
          <div className="gallery-header text-center">
            <span className="gallery-badge">Our Clinic</span>
            <h1>Clinic Gallery</h1>
            <p>
              Explore our modern infrastructure, equipment & patient-friendly
              spaces
            </p>
          </div>

          {/* GRID */}
          <div className="gallery-grid">
            {images.map((src, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item-${i + 1}`}
                onClick={() => setPreview(src)}
              >
                <img src={src} alt="Dental Clinic" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* PREVIEW */}
      {preview && (
        <div className="gallery-modal" onClick={() => setPreview(null)}>
          <img src={preview} />
        </div>
      )}
    </>
  );
}
