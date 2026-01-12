"use client";

import Image from "next/image";
import DoctorSection from "@/components/DoctorCard";
import { doctors } from "@/data/doctors";

export default function About() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* TEXT */}
            <div className="col-lg-6">
              <span className="fs-5 text-info fw-bold fs-2">
                About Dental Planet
              </span>

              <h1 className="fw-bold display-6 mt-2">
                Caring for Smiles <br className="d-none d-md-block" />
                With Compassion & Expertise
              </h1>

              <p className="text-muted fs-5 mt-3">
                At Dental Planet, we combine modern technology with gentle,
                patient-first care to help you achieve a healthy, confident
                smile.
              </p>
            </div>

            {/* IMAGE (VISIBLE ON MOBILE & DESKTOP) */}
            <div className="col-lg-6 text-center">
              <div className="overflow-hidden rounded-3">
                <Image
                  src="/images/bg1.jpeg"
                  alt="Dental Planet Team"
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2 className="fw-bold mb-3">Our Story</h2>
              <p className="text-muted fs-6">
                Founded with a mission to make dental care comfortable and
                accessible, SmileCare has been serving patients with honesty,
                precision, and empathy.
              </p>
            </div>
          </div>

          <div className="row mt-4 g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h5>🎯 Our Mission</h5>
                <p className="text-muted mb-0">
                  To provide high-quality dental care in a calm, friendly
                  environment using the latest techniques.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h5>👁 Our Vision</h5>
                <p className="text-muted mb-0">
                  To be a trusted dental clinic known for ethical treatment and
                  long-term patient relationships.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h5>🤝 Our Values</h5>
                <p className="text-muted mb-0">
                  Compassion, transparency, safety, and excellence in every
                  smile we care for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR DOCTORS ===== */}
      <section style={{ background: "#f8fafc" }}>
        <DoctorSection doctor={doctors[0]} />
      </section>

      <section style={{ background: "#ffffff" }}>
        <DoctorSection doctor={doctors[1]} reverse />
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose SmileCare?</h2>
            <p className="text-muted mt-2">
              What makes us different from other dental clinics.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 text-center h-100">
                <span className="fs-2">🧑‍⚕️</span>
                <h6 className="mt-3">Experienced Dentists</h6>
                <p className="text-muted small">
                  Highly trained professionals with years of experience.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 text-center h-100">
                <span className="fs-2">🦷</span>
                <h6 className="mt-3">Modern Equipment</h6>
                <p className="text-muted small">
                  Advanced tools for safe and precise treatments.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 text-center h-100">
                <span className="fs-2">😊</span>
                <h6 className="mt-3">Pain-Free Care</h6>
                <p className="text-muted small">
                  Gentle procedures focused on patient comfort.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 text-center h-100">
                <span className="fs-2">⏱</span>
                <h6 className="mt-3">Flexible Appointments</h6>
                <p className="text-muted small">
                  Convenient scheduling that fits your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
