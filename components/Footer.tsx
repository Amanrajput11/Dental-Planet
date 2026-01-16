"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-light"
      style={{
        background: "linear-gradient(135deg, #000000, #111827)",
      }}
    >
      <div className="container py-5">
        <div className="row gy-5 align-items-start">
          {/* BRAND */}
          <div className="col-md-3">
            <Image
              src="/images/logo3.png"
              alt="Dental Planet Logo"
              width={180}
              height={90}
              className="mb-3"
            />
            <p className="small text-light opacity-75 mb-3">
              Modern, gentle and trusted dental care for the whole family.
            </p>

            <p className="small mb-1 fw-semibold">Founders</p>
            <p className="small mb-0 opacity-75">
              Dr. Ankur Vatsal
              <br />
              Dr. Khushboo Barjatya Vatsal
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="text-uppercase mb-3 fw-semibold">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a
                  href="/about"
                  className="text-light text-decoration-none opacity-75"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-light text-decoration-none opacity-75"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-light text-decoration-none opacity-75"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-light text-decoration-none opacity-75"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-md-3">
            <h6 className="text-uppercase mb-3 fw-semibold">Contact</h6>

            <p className="small mb-2 opacity-75">
              📍 17 A Baktawar Ram Nagar,
              <br />
              Tilak Nagar, Indore
            </p>

            <p className="small mb-2 opacity-75">📞 9301665066, 74006 30334</p>

            <p className="small mb-2 opacity-75">✉️ kbdentalplanet@gmail.com</p>

            <p className="small mb-0 opacity-75">
              🕒 Weekdays: 10am–2pm, 5pm–8:30pm
              <br />
              Sundays: Appointment only (10am–12pm)
            </p>
          </div>

          {/* MAP */}
          <div className="col-md-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Our Location</h6>

            <div
              className="overflow-hidden rounded-3 mb-2"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.1514803724904!2d75.89567790000002!3d22.71697810000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3241c49bc1%3A0x383af170b232cbb3!2sDental%20planet!5e0!3m2!1sen!2sin!4v1768229684378!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Dental+planet+Tilak+Nagar+Indore"
              target="_blank"
              rel="noopener noreferrer"
              className="small fw-semibold text-success text-decoration-none"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>

        {/* WHATSAPP */}
        <div className="text-center mt-5">
          <h6 className="text-uppercase mb-2 fw-semibold">
            WhatsApp Appointment
          </h6>
          <p className="small opacity-75 mb-3">Scan or click to chat with us</p>

          <a
            href="https://wa.me/919301665066"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="shadow"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <img
                src="/qr-wa.png"
                alt="WhatsApp QR"
                style={{ width: "150px", borderRadius: "10px" }}
              />
              <div className="mt-2 small fw-semibold">
                Click to open WhatsApp
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="text-center py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <small className="fw-semibold opacity-75">
          © {new Date().getFullYear()} Dental Planet — All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
