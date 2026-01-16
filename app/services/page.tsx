"use client";

import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const CATEGORY_ORDER = [
  "services",
  "treatment",
  "surgery",
  "facilities",
  "procedures",
];

const CATEGORY_TITLES: Record<string, string> = {
  services: "Services",
  treatment: "Treatments",
  surgery: "Surgical Procedures",
  facilities: "Facilities",
  procedures: "Procedures",
};

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill">
            What We Offer
          </span>

          <h1 className="fw-bold mb-3">Our Dental Services</h1>

          <p className="text-muted mb-0 mx-auto" style={{ maxWidth: 640 }}>
            Comprehensive dental care using modern technology, ethical
            practices, and patient-first treatment.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <div className="container py-5">
        {CATEGORY_ORDER.map((category) => {
          const items = services.filter((s) => s.category === category);
          if (items.length === 0) return null;

          return (
            <section key={category} className="mb-5">
              {/* CATEGORY HEADER */}
              <div className="mb-4">
                <h2 className="fw-semibold mb-1">
                  {CATEGORY_TITLES[category]}
                </h2>
                <div className="bg-primary" style={{ width: 60, height: 3 }} />
              </div>

              {/* GRID */}
              <div className="row g-4">
                {items.map((s) => (
                  <div className="col-sm-6 col-md-4 col-lg-3" key={s.slug}>
                    <ServiceCard {...s} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
