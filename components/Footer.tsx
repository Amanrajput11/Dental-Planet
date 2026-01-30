"use client";
import Image from "next/image";

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
            {/* SOCIAL MEDIA */}
            <div>
              <h6 className="fw-semibold mb-2">Follow Us</h6>
<<<<<<< HEAD
              <a
                href="https://www.instagram.com/dental_____planet/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{ width: 40, height: 40, background: "#fff" }}
              >
                <img
                  src="/images/instagram2.png"
                  alt="Instagram"
                  width="40"
                  height="40"
                />
              </a>
=======
              <div className="d-flex align-items-center gap-3">
                <a
                  href="https://www.instagram.com/dental_____planet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    textDecoration: "none",
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    color: "white",
                  }}
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/dentistcareforall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    textDecoration: "none",
                    backgroundColor: "#1877F2", // Official Facebook Blue
                    color: "white", // White icon
                  }}
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
>>>>>>> 6b13b550b0bb449ea08843120ae2f784bcca85ac
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-white-50 text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  className="text-white-50 text-decoration-none"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#gallery"
                  className="text-white-50 text-decoration-none"
                >
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#blog" className="text-white-50 text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-semibold mb-3">Contact</h6>
            <p className="small opacity-75 mb-2">
              📍 17 A Baktawar Ram Nagar, Tilak Nagar, Indore
            </p>
            <p className="small opacity-75 mb-2">📞 9301665066, 74006 30334</p>
            <p className="small opacity-75 mb-2">✉️ kbdentalplanet@gmail.com</p>
            <p className="small opacity-75 mb-0">
              🕒 Weekdays: 10am–2pm, 5pm–8:30pm
              <br />
              Sundays: Appointment only (10am–12pm)
            </p>
          </div>

          {/* MAP */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-semibold mb-3">Our Location</h6>
            <div className="mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8!2d75.8!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
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
      </div>

      {/* BOTTOM BAR */}
      <div
        className="text-center py-3 mt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <small className="fw-semibold opacity-75 d-block">
          © {new Date().getFullYear()} Dental Planet — All Rights Reserved
        </small>
        <small className="opacity-50">
          Designed & Developed by{" "}
          <span className="fw-semibold">Kiwi Connect Digital</span>
        </small>
      </div>
    </footer>
  );
}
