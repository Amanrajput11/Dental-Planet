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
          {/* BRAND + LOGO */}
          <div className="col-md-3">
            <Image
              src="/images/logo3.png"
              alt="Dental Planet Logo"
              width={180}
              height={90}
              className="mb-3"
            />
            <p className="text-light small mb-0">
              Modern, gentle and trusted dental care for the whole family.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="footer-title text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links d-flex flex-column gap-2">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* GOOGLE MAP (WIDER) */}
          <div className="col-md-4">
            <h6 className="footer-title text-uppercase mb-3">Our Location</h6>

            <div
              className="overflow-hidden rounded-2"
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
              className="d-inline-block mt-2 small text-success fw-semibold text-decoration-none"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* WHATSAPP QR */}
          <div className="col-md-3 text-center">
            <h6 className="footer-title text-uppercase mb-2">
              WhatsApp Appointment
            </h6>
            <p className="small mb-3">Scan or click to chat with us</p>

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
                  padding: "14px 16px",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "inline-block",
                  boxShadow: "0 0 18px rgba(0,255,0,0.25)",
                }}
              >
                <img
                  src="/qr-wa.png"
                  alt="WhatsApp QR"
                  style={{ width: "160px", borderRadius: "10px" }}
                />
                <div className="mt-2 small">Click to open WhatsApp</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="text-center py-3"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <small className="fw-semibold">
          © {new Date().getFullYear()} Dental Planet — All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
