"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom sticky-top">
      <div className="container">
        {/* Brand */}
        <Link href="/" className="navbar-brand fw-bold text-primary">
          <span style={{fontSize:18, marginRight:8}}>🦷</span>SmileCare
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span style={{ fontSize: "1.6rem" }}>
                {open ? "✖" : "☰"}
          </span>

        </button>

        {/* DESKTOP NAV (always visible) */}
        <div className="d-none d-lg-flex ms-auto">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="btn btn-primary px-3">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="d-lg-none bg-white border-top">
          <ul className="navbar-nav px-3 py-3 gap-2">
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="btn btn-primary w-100 mt-2"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
