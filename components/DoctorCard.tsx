import Image from "next/image";

export default function DoctorSection({ doctor, reverse = false }: any) {
  return (
    <section className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div
          className={`row align-items-center g-5 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="col-lg-6">
            <div className="position-relative ">
              <div style={{ position: "relative", width: "100%", height: "520px", backgroundColor: "transparent" }}>
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  style={{ objectFit: "contain" }}
                  
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2 className="fw-bold display-6 mb-2">{doctor.name}</h2>

            <h5 className="text-success mb-3">{doctor.specialization}</h5>

            <p className="text-muted fs-5">{doctor.description}</p>

            {doctor.isChildSpecialist && (
              <span className="badge bg-warning text-dark rounded-pill px-4 py-2 fs-6">
                Pediatric / Child Dental Specialist
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
