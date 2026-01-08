"use client";

import Link from "next/link";
import DoctorCard from "@/components/DoctorCard";
import ServiceCard from "@/components/ServiceCard";

import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { blogs } from "@/data/blogs";

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero-gradient py-5">
        <div className="container py-5">
          <div className="row align-items-center gy-5">
            {/* LEFT */}
            <div className="col-lg-7">
              <h1 className="hero-title display-4 fw-bold">
                Caring for <span>Your Smile</span>
              </h1>

              <p className="hero-subtitle mt-4 fs-5">
                Modern, gentle and personalised dental care using the latest
                technology — because your smile deserves the best.
              </p>

              <div className="mt-4 d-flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn btn-success btn-lg px-4 shadow-sm rounded-pill"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-5 text-center">
              <div className="hero-card shadow-lg">
                <span className="hero-icon">🦷</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCTORS ===== */}
      <section className="section-soft-bg py-5">
  <div className="container">
    {/* SECTION HEADER */}
    <div className="text-center mb-5">
      <h2 className="fw-semibold">Meet Our Doctors</h2>
      <p className="text-muted mb-0">
        Experienced professionals dedicated to your smile
      </p>
    </div>

    {/* DOCTORS GRID */}
    <div className="row justify-content-center g-5">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="col-xl-4 col-lg-5 col-md-8"
        >
          <DoctorCard doctor={doctor} />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== SERVICES ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Complete dental care for every stage of life
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div key={service.slug} className="col-md-4">
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOGS ===== */}
      <section className="section-soft-bg py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Latest Blogs</h2>
            <p className="section-subtitle">
              Dental tips, guides & oral health insights
            </p>
          </div>

          <div className="row g-4">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.slug} className="col-md-4">
                <div className="card h-100 blog-card">
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-semibold">{blog.title}</h5>

                    <p className="text-muted small flex-grow-1">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="btn btn-primary w-100"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
