import { blogs } from "@/data/blogs";

export default async function ServiceDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const blog = blogs.find(s => s.slug === slug);

  if (!blog) {
    return (
      <div className="container py-5 text-center">
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <div
        className="service-detail bg-white rounded-4 shadow-sm p-4 p-md-5"
        style={{ lineHeight: 1.8 }}
      >
        {/* TITLE */}
        <h1 className="mb-3">{blog.title}</h1>

        {/* META */}
        <p className="text-muted mb-4">
          {blog.date} • {blog.author}
        </p>

        {/* EXCERPT */}
        <p
          className="fs-5 fw-medium mb-4"
          style={{ color: "#555" }}
        >
          {blog.excerpt}
        </p>

        <hr className="my-4" />

        {/* CONTENT */}
        <article
          style={{
            fontSize: "16px",
            color: "#333",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content}
        </article>
      </div>
    </div>
  );
}
