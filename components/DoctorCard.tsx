import Image from "next/image";
import Link from "next/link";

export default function DoctorSection({ doctor, reverse = false }: any) {
  return (
    <section className="py-2">
      <div className="container">
        <div
          className={`row align-items-center gy-4 gy-lg-5 ${
            reverse ? "flex-lg-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="col-12 col-lg-5 text-center">
            <div className="mx-auto" style={{ maxWidth: 380 }}>
              <div className="rounded-4 overflow-hidden p-3">
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
          <div className="col-12 col-lg-7 d-flex align-items-center">
            <div className="w-100 text-center text-lg-start">
              <h2
                className="fw-bold display-6 mb-1"
                style={{ color: "#C7A34A" }}
              >
                {doctor.name}
              </h2>

              <p className="text-muted fw-medium mb-2">{doctor.title}</p>

              <h5 className="doctor-specialization mb-3">
                {doctor.specialization}
              </h5>

              <p
                className="text-muted fs-6 lh-lg mb-4"
                style={{ textAlign: "justify" }}
              >
                {doctor.description}
              </p>

              {/* CTA BOX */}
              <div className="mt-4">
                <div className="border rounded-4 p-4">
                  {/* SPECIALIST TAG */}
                  {doctor.isChildSpecialist && (
                    <div className="mb-3 text-center text-lg-start">
                      <span className="badge bg-light rounded-pill px-4 py-2 fs-6 shadow-sm text-dark">
                        Pediatric / Child Dental Specialist
                      </span>
                    </div>
                  )}

                  {/* CTA BUTTON */}
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="btn btn-outline-info rounded-pill w-100 px-4 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="fa-solid fa-user-doctor text-white"></i>
                    <span className="text-white">
                      Know more about {doctor.name}
                    </span>
                    <i className="fa-solid fa-arrow-right text-white"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
