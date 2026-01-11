export default function TestimonialCard({
  name,
  treatment,
  message,
}: {
  name: string;
  treatment: string;
  message: string;
}) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
      <p className="text-muted fst-italic mb-2">“{message}”</p>

      <hr className="mt-3" />

      <h6 className="fw-bold mb-0">{name}</h6>
      <small className="text-primary">{treatment}</small>
    </div>
  );
}
