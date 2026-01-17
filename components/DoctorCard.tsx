import Image from "next/image";
import Link from "next/link";

export default function DoctorSection({ doctor, reverse = false }: any) {
  return (
    <section className="py-5">
      <div className="container">
        <div
          className={`row align-items-center gy-4 gy-lg-5 ${
            reverse ? "flex-lg-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="col-12 col-lg-5 text-center">
            <div className="mx-auto" style={{ maxWidth: 380 }}>
              <div className="rounded-4 overflow-hidden shadow-sm bg-white p-3">
                <div
                  className="position-relative"
                  style={{ width: "100%", height: "420px" }}
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <h2 className="fw-bold display-6 mb-2">{doctor.name}</h2>

            <h5 className="text-primary fw-semibold mb-3">
              {doctor.specialization}
            </h5>

            <p
              className="text-muted fs-6 lh-lg mb-4 mx-auto mx-lg-0"
              style={{ textAlign: "justify" }}
            >
              {doctor.description}
            </p>

            {doctor.isChildSpecialist && (
              <div className="mt-4">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3 p-3 rounded-4 bg-light border">
                  {/* SPECIALIST BADGE */}
                  <span className="badge bg-warning text-dark rounded-pill px-4 py-2 fs-6 shadow-sm">
                    Pediatric / Child Dental Specialist
                  </span>

                  {/* CTA BUTTON */}
                  <Link
                    href="/doctors/dr-khushboo"
                    className="btn btn-outline-info rounded-pill px-4 py-2 fw-semibold"
                  >
                    Know more about Dr. Khushboo →
                  </Link>
                </div>
              </div>
            )}

            {/* ✅ HARD LINK – ALWAYS WORKS */}
          </div>
        </div>
      </div>
    </section>
  );
}
