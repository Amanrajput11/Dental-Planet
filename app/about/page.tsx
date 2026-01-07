export default function About() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="about-hero py-5">
        <div className="container py-4">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="mb-3 fs-2 text-light">
                 About SmileCare 🦷
              </span>

              <h1 className="about-title mt-2">
                Caring for Smiles <br className="d-none d-md-block" />
                With Compassion & Expertise
              </h1>

              <p className="about-subtitle mt-3">
                At SmileCare Dental Clinic, we combine modern technology with
                gentle, patient-first care to help you achieve a healthy,
                confident smile.
              </p>
            </div>

            <div className="col-lg-5 text-center">
              <div className="about-visual">
                <span>🦷</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2 className="section-title">Our Story</h2>
              <p className="section-subtitle mt-3">
                Founded with a mission to make dental care comfortable and
                accessible, SmileCare has been serving patients with honesty,
                precision, and empathy.
              </p>
            </div>
          </div>

          <div className="row mt-4 g-4">
            <div className="col-md-4">
              <div className="about-card">
                <h5>🎯 Our Mission</h5>
                <p>
                  To provide high-quality dental care in a calm, friendly
                  environment using the latest techniques.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card">
                <h5>👁 Our Vision</h5>
                <p>
                  To be a trusted dental clinic known for ethical treatment and
                  long-term patient relationships.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card">
                <h5>🤝 Our Values</h5>
                <p>
                  Compassion, transparency, safety, and excellence in every
                  smile we care for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose SmileCare?</h2>
            <p className="section-subtitle mt-2">
              What makes us different from other dental clinics.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <span>🧑‍⚕️</span>
                <h6>Experienced Dentists</h6>
                <p>Highly trained professionals with years of experience.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <span>🦷</span>
                <h6>Modern Equipment</h6>
                <p>Advanced tools for safe and precise treatments.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <span>😊</span>
                <h6>Pain-Free Care</h6>
                <p>Gentle procedures focused on patient comfort.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <span>⏱</span>
                <h6>Flexible Appointments</h6>
                <p>Convenient scheduling that fits your lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
