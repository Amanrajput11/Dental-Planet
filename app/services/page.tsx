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
    <div className="container py-5">
      <h1 className="fw-bold mb-5">Our Services</h1>

      {CATEGORY_ORDER.map((category) => {
        const items = services.filter((s) => s.category === category);

        if (items.length === 0) return null;

        return (
          <section key={category} className="mb-5">
            <h2 className="fw-semibold mb-4">{CATEGORY_TITLES[category]}</h2>

            <div className="row g-4">
              {items.map((s) => (
                <div className="col-md-4" key={s.slug}>
                  <ServiceCard {...s} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
