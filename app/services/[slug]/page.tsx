"use client";

import { services } from "@/data/services";

export default async function ServiceDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container py-5">
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <div className="service-detail">

        {/* TITLE */}
        <h1>{service.title}</h1>

        {/* DESCRIPTION */}
        <p>{service.longDescription}</p>

        {/* IMAGE */}
       <div style={{ marginBottom: "25px" }}> <img src={service.image} alt={service.title} style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "10px", }} /> </div>

        {/* FEATURES */}
        <h3>What’s Included</h3>

        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}
