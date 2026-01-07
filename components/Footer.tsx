export default function Footer() {
  return (
    <footer
      className="text-light"
      style={{
        background: "linear-gradient(135deg, #000000, #111827)",
      }}
    >
      <div className="container py-5">
        <div className="row gy-5">

          {/* BRAND */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-2">SmileCare Dental</h4>
            <p className="text-light small">
              Modern, gentle and trusted dental care for the whole family.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4">
            <h6 className="footer-title text-uppercase">Quick Links</h6>
            <ul className="list-unstyled footer-links mt-3">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Book Appointment</a></li>
            </ul>
          </div>

          {/* WHATSAPP QR */}
          <div className="col-md-4 text-center">
            <h6 className="footer-title text-uppercase">WhatsApp Appointment</h6>
            <p className="small mt-2">Scan or click to chat with us</p>

            {/* CLICKABLE QR */}
            <a
              href="https://wa.me/918305959538"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "14px",
                  padding: "15px 18px",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "inline-block",
                  boxShadow: "0 0 18px rgba(0,255,0,0.25)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
              >
                <img
                  src="/qr-wa.png"
                  alt="WhatsApp QR"
                  style={{
                    width: "170px",
                    borderRadius: "10px",
                  }}
                />

                <div className="mt-2" style={{ fontSize: "14px" }}>
                  📲 Click to open WhatsApp
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="text-center py-3"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          marginTop: "10px",
        }}
      >
        <small className="text-light fw-bold">
          © {new Date().getFullYear()} SmileCare Dental — All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
