"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Image from "next/image";
import Link from "next/link";
import DoctorCard from "@/components/DoctorCard";

import { doctors } from "@/data/doctors";

import { blogs } from "@/data/blogs";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero-section position-relative d-flex align-items-center text-center p-4"
        style={{
          backgroundImage: "url('/images/bg2.jpeg')",
        }}
      >
        {/* OVERLAY */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              {/* BADGE */}
              <span className="badge bg-info bg-opacity-75 text-light rounded-pill px-4 py-2 mb-4">
                Dental Planet • The World of Dental Perfection
              </span>

              {/* HEADING */}
              <h1 className="fw-bold text-white display-4 lh-sm opacity-30">
                World-Class Dental Care <br />
                <span className="text-info">Rooted in Trust & Innovation</span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="fs-5 text-white-50 mt-4 mx-auto"
                style={{ maxWidth: "720px" }}
              >
                A premier dental care center in Tilak Nagar, Indore — delivering
                modern, compassionate, and comprehensive oral healthcare for
                every smile.
              </p>

              {/* CTA */}
              <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                <Link
                  href="/services"
                  className="btn btn-light btn-lg rounded-pill px-4 fw-semibold shadow"
                >
                  Explore Treatments
                </Link>

                <Link
                  href="/about"
                  className="btn btn-outline-info btn-lg rounded-pill px-4 fw-semibold"
                >
                  Meet Our Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        className="position-relative py-5"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(255,255,255,0.88)" }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              {/* LOGO */}
              <div className="mb-4 text-center">
                <Image
                  src="/images/logo2.png"
                  alt="Dental Planet Logo"
                  width={200}
                  height={100}
                  priority
                />
              </div>

              <h2 className="fw-bold mb-3 text-center">
                Welcome to <span className="text-success">Dental Planet</span>
              </h2>

              <p className="fs-6 text-muted mb-3">
                <strong>Dental Planet – The World of Dental Perfection</strong>{" "}
                is a premier dental care center founded by
                <strong> Dr. Ankur Vatsal</strong> and
                <strong> Dr. Khushboo Barjatya Vatsal</strong>, located in Tilak
                Nagar, Indore.
              </p>

              <p className="text-muted mb-4">
                We provide comprehensive, modern dental care — from routine
                checkups and cleanings to advanced treatments like root canals,
                crowns, implants, and digital dentistry — all under one roof.
              </p>

              {/* HIGHLIGHTS */}
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded shadow-sm">
                    ✔ Experienced & compassionate dentists
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded shadow-sm">
                    ✔ Advanced digital dentistry
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded shadow-sm">
                    ✔ Hygienic & patient-friendly clinic
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded shadow-sm">
                    ✔ Transparent & affordable pricing
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <div className="rounded-2 overflow-hidden shadow-lg">
                <Image
                  src="/images/gallary1.jpeg" // 👉 use clinic / doctors image
                  alt="Dental Planet Clinic"
                  width={600}
                  height={450}
                  className="img-fluid p-2"
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
          <div className="row g-4 justify-content-center">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="col-lg-6 col-md-10">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
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

          {["services", "treatment", "surgery"].map((category) => {
            const filtered = services.filter((s) => s.category === category);

            if (!filtered.length) return null;

            return (
              <div key={category} className="mb-5">
                <h4 className="fw-semibold mb-4 text-capitalize">{category}</h4>

                <div className="row g-4">
                  {filtered.slice(0, 3).map((service) => (
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
            );
          })}

          {/* CTA */}
          <div className="text-center mt-4">
            <Link
              href="/services"
              className="btn btn-outline-primary btn-lg rounded-pill"
            >
              View All Services →
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
                      className="btn btn-primary w-100 mt-2"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-4">
            <Link
              href="/blog"
              className="btn btn-outline-primary btn-lg rounded-pill"
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
                  <div className="d-flex justify-content-center">
                    <div className="testimonial-wrapper">
                      <TestimonialCard {...t} />
                    </div>
                  </div>
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
