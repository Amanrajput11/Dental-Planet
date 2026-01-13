import Image from "next/image";

export default function TestimonialCard({
  name,
  treatment,
  message,
  image,
}: {
  name: string;
  treatment: string;
  message: string;
  image: string;
}) {
  return (
    <div className="testimonial-card text-center mx-auto">
      <div className="quote-icon">“</div>

      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-circle mb-3"
      />

      <h5 className="fw-bold mb-0">{name}</h5>
      <small className="text-muted">{treatment}</small>

      <p className="text-muted fst-italic mt-3 mb-0">{message}</p>
    </div>
  );
}
