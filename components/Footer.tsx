"use client";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* BRAND */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Dental Planet</h5>
            <p className="opacity-75 mb-3">
              Modern, gentle and trusted dental care for the whole family.
            </p>

            <div className="mb-3">
              <h6 className="fw-semibold mb-2">Founders</h6>
              <p className="small opacity-75 mb-1">Dr. Ankur Vatsal</p>
              <p className="small opacity-75">Dr. Khushboo Barjatya Vatsal</p>
            </div>

            <h6 className="fw-semibold mb-2">Follow Us</h6>
            <div className="d-flex gap-3">
              <a
                href="https://www.instagram.com/dental_____planet/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: 40,
                  height: 40,
                  background: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/dentistcareforall"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                style={{ width: 40, height: 40 }}
              >
                FB
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-white-50 text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white-50 text-decoration-none"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white-50 text-decoration-none"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white-50 text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-semibold mb-3">Contact</h6>
            <p className="small opacity-75">📍 Tilak Nagar, Indore</p>
            <p className="small opacity-75">📞 9301665066</p>
            <p className="small opacity-75">✉️ kbdentalplanet@gmail.com</p>
          </div>

          {/* MAP */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-semibold mb-3">Our Location</h6>
            <iframe
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              src="https://maps.google.com/maps?q=Dental%20Planet%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center pt-4 mt-4 border-top border-secondary">
        <small className="opacity-75">
          © {new Date().getFullYear()} Dental Planet — All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
