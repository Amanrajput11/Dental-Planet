import Link from "next/link";

export default function ServiceCard({
  title,
  slug,
  description,
}: {
  title: string;
  slug: string;
  description: string;
}) {
  return (
    <div className="card h-100 shadow-sm border-0 card-hover">
  <div className="card-body d-flex flex-column gap-3">

    <div className="d-flex align-items-center gap-3">
      <div
        className="service-icon rounded-circle"
        style={{
          width: 44,
          height: 44,
          background: "#e0f2fe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          color: "#0284c7",
        }}
      >
        {title.charAt(0)}
      </div>

      <h5 className="card-title mb-0">{title}</h5>
    </div>

    <p className="text-muted flex-grow-1">{description}</p>

    <Link href={`/services/${slug}`} className="btn btn-primary w-100">
      Know More →
    </Link>
  </div>
</div>

  );
}
