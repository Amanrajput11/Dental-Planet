"use client";

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
     <section className="hero-gradient py-5">
  <div className="container py-4">
    <div className="row align-items-center gy-4">
      
      {/* LEFT */}
      <div className="col-lg-7">

        <h1 className="hero-title mt-2">
          Caring for <span>Your Smile</span>
        </h1>

        <p className="hero-subtitle mt-3">
          Modern, gentle and personalised dental care using the latest
          technology — because your smile deserves the best.
        </p>

        <div className="mt-4 d-flex flex-wrap gap-3">
          <a href="/contact" className="btn btn-outline-light btn-lg px-4">
            Book Appointment
          </a>

          <a href="/services" className="btn btn-outline-light btn-lg px-4">
            View Services
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-lg-5 text-center">
        <div className="hero-card">
          <span className="hero-icon">🦷</span>
        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
