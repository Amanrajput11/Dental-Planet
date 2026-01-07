import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Our Services</h1>

      <div className="row g-4">
        {services.map((s) => (
          <div className="col-md-4" key={s.slug}>
            <ServiceCard {...s} />
          </div>
        ))}
      </div>
    </div>
  );
}
