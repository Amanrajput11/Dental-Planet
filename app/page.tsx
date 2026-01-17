"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import Link from "next/link";
// import DoctorCard from "@/components/DoctorCard";

import { doctors } from "@/data/doctors";

import { blogs } from "@/data/blogs";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import DoctorSection from "@/components/DoctorCard";

const testimonialChunks: (typeof testimonials)[] = [];

for (let i = 0; i < testimonials.length; i += 3) {
  testimonialChunks.push(testimonials.slice(i, i + 3));
}

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="w-100">
        <img
          src="/images/bg2.jpeg"
          alt="Dental Planet"
          className="img-fluid w-100"
          style={{
            display: "block",
          }}
        />
      </section>

      {/* ===== ABOUT ===== */}
      {/* ===== ABOUT ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              {/* LOGO */}
              <div className="mb-4 text-center text-lg-start">
                <Image
                  src="/images/logo2.png"
                  alt="Dental Planet Logo"
                  width={200}
                  height={100}
                  priority
                />
              </div>

              <h2 className="fw-bold mb-3 text-center text-lg-start">
                Welcome to <span className="text-primary">Dental Planet</span>
              </h2>

              <p className="fs-6 text-muted mb-3 lh-lg">
                <strong>Dental Planet – The World of Dental Perfection</strong>{" "}
                is a premier dental care center founded by
                <strong> Dr. Ankur Vatsal</strong> and
                <strong> Dr. Khushboo Barjatya Vatsal</strong>, located in Tilak
                Nagar, Indore.
              </p>

              <p className="text-muted mb-4 lh-lg">
                We provide comprehensive, modern dental care — from routine
                checkups and cleanings to advanced treatments like root canals,
                crowns, implants, and digital dentistry — all under one roof.
              </p>

              {/* HIGHLIGHTS */}
              <div className="row g-3">
                {[
                  "Experienced & compassionate dentists",
                  "Advanced digital dentistry",
                  "Hygienic & patient-friendly clinic",
                  "Transparent & affordable pricing",
                ].map((text, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="p-3 bg-white rounded-4 shadow-sm border-start border-4 border-primary">
                      ✔ {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <div className="rounded-4 overflow-hidden">
                <Image
                  src="/images/gallary1.jpeg"
                  alt="Dental Planet Clinic"
                  width={600}
                  height={450}
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Clinic Gallery</h2>
            <p className="text-muted mb-0">
              A glimpse into our modern, hygienic & patient-friendly dental
              clinic
            </p>
          </div>

          <div className="row g-3 align-items-stretch">
            {/* LEFT BIG IMAGE */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="ratio ratio-1x1 h-100">
                  <img
                    src="/images/gallary1.jpeg"
                    alt="Dental Clinic Exterior"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT STACK (MATCH HEIGHT) */}
            <div className="col-md-6">
              <div className="row g-3 h-100">
                {/* TOP TWO */}
                <div className="col-6">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="ratio ratio-1x1">
                      <img
                        src="/images/gallary2.jpeg"
                        alt="Dental Equipment"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="ratio ratio-1x1">
                      <img
                        src="/images/gallary3.jpeg"
                        alt="Dental Consultation"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>

                {/* BOTTOM (TAKES FULL WIDTH) */}
                <div className="col-12">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="ratio ratio-16x9">
                      <img
                        src="/images/gallary4.jpeg"
                        alt="Clinic Treatment Room"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            {["5", "6", "7"].map((num) => (
              <div key={num} className="col-md-4 col-sm-6">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="ratio ratio-4x3">
                    <img
                      src={`/images/gallary${num}.jpeg`}
                      alt="Dental Planet Gallery"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCTORS (FULL SECTIONS) ===== */}
      {/* ================= DOCTORS SECTION ================= */}
      <section className="py-5" style={{ background: "#f8fafc" }}>
        <div className="container mb-5">
          <div className="text-center">
            <h2 className="fw-bold mb-2">Meet Our Doctors</h2>
            <p className="text-muted mb-0">
              Experienced specialists dedicated to your dental health
            </p>
          </div>
        </div>

        <DoctorSection doctor={doctors[0]} />
        <DoctorSection doctor={doctors[1]} reverse />
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-5">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Complete dental care for every stage of life
            </p>
          </div>

          {/* SERVICES (ONE FROM EACH CATEGORY) */}
          <div className="row g-4">
            {["services", "treatment", "surgery"].map((category) => {
              const service = services.find((s) => s.category === category);

              if (!service) return null;

              return (
                <div key={service.slug} className="col-md-4">
                  <ServiceCard
                    title={service.title}
                    slug={service.slug}
                    description={service.description}
                    image={service.image}
                  />
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-4 text-center">
            <Link
              href="/services"
              className="btn btn-sm fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOGS ===== */}
      {/* ===== BLOGS ===== */}
      <section className="section-soft-bg py-5">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="section-title">Latest Blogs</h2>
            <p className="section-subtitle">
              Dental tips, guides & oral health insights
            </p>
          </div>

          <div className="row g-4">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.slug} className="col-md-4">
                <div className="card h-100 blog-card border-0 shadow-sm rounded-4 overflow-hidden">
                  {/* IMAGE */}
                  <div className="ratio ratio-16x9">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-semibold">{blog.title}</h5>

                    <p className="text-muted small flex-grow-1">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="btn btn-sm fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold"
                    >
                      Read Blog →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-4 text-center">
            <Link
              href="/blog"
              className="btn btn-sm fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold"
            >
              View All Blogs →
            </Link>
          </div>
        </div>
      </section>
      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonial-section py-5">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Patients Say</h2>
            <p className="text-muted">
              Real experiences from our happy patients
            </p>
          </div>

          {/* CAROUSEL */}
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>

            {/* CONTROLS */}
            <button
              className="carousel-control-prev testimonial-control"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              ‹
            </button>

            <button
              className="carousel-control-next testimonial-control"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
