"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-lg-7">
            <div className="contact-card p-4 p-md-5">

              {/* HEADER */}
              <div className="text-center mb-4">
                <span className="badge badge-soft mb-2">
                  🦷 Appointment
                </span>
                <h1 className="fw-bold mt-2">Book an Appointment</h1>
                <p className="text-muted">
                  Fill in the details and our team will get back to you shortly.
                </p>
              </div>

              {/* SUCCESS */}
              {sent ? (
                <div className="alert alert-success text-center">
                <strong>Thank you! </strong>
                Your appointment request has been sent.
                            <br />
                We’ll contact you shortly.
                </div>
                
              ) : (
                <form
                  className="row g-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    setTimeout(() => setSent(false), 4000);
                  }}
                >
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Service</label>
                    <select className="form-select form-select-lg">
                      <option>Teeth Cleaning</option>
                      <option>Dental Implants</option>
                      <option>Braces & Aligners</option>
                      <option>General Checkup</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Any specific concern or question?"
                    />
                  </div>

                  <div className="col-12 mt-3">
                    <button className="btn btn-primary btn-lg w-100">
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
