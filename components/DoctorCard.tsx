"use client";

import Image from "next/image";

export default function DoctorCard({ doctor }: any) {
  return (
    <div className="card h-100 border-0 shadow-sm overflow-hidden d-flex justify-content-center align-content-center border border-dark">
      {/* IMAGE WRAPPER */}
      <div className="bg-light d-flex justify-content-center align-items-end">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={400}
          className="img-fluid"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* BODY */}
      <div className="card-body text-center px-4">
        {/* BADGES */}
        <div className="mb-2 d-flex justify-content-center gap-2 flex-wrap">
          <span className="badge bg-primary">Certified</span>
          <span className="badge bg-success">10+ Years</span>
          <span className="badge bg-info text-dark">Dental Expert</span>
        </div>

        {/* NAME */}
        <h5 className="fw-semibold mb-1">{doctor.name}</h5>

        {/* ROLE */}
        <p className="fw-bold badge bg-warning">{doctor.role}</p>

        {/* DESCRIPTION */}
        <p className="text-dark mb-0">
          {doctor.description}
        </p>
      </div>
    </div>
  );
}
