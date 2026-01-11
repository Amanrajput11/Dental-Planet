import Image from "next/image";

export default function DoctorCard({ doctor }: any) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="row g-0 align-items-center">
        {/* CONTENT */}
        <div className="col-md-8">
          <div className="card-body py-4">
            <h5 className="fw-bold mb-1">{doctor.name}</h5>

            <p className="text-success fw-semibold mb-2">
              {doctor.specialization}
            </p>

            <p className="text-muted small mb-3">{doctor.description}</p>

            {/* TAG */}
            {doctor.isChildSpecialist && (
              <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                Child Dental Specialist
              </span>
            )}
          </div>
        </div>
        {/* IMAGE */}
        {/* IMAGE */}
        <div className="col-md-4 p-3">
          <div className="doctor-image-wrapper border rounded-4 shadow-sm bg-white">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
