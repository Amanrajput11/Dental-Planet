import Link from "next/link";
import { blogs } from "@/data/blogs";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="container py-5 text-center">
        <h2>Blog not found</h2>
      </div>
    );
  }

  // Other blogs (exclude current one)
  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 5);

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link
          href={`/blog`}
          className="btn btn-sm fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold mt-auto"
        >
          ← Back to Blogs
        </Link>
      </div>
      <div className="row g-5">
        {/* ================= LEFT : BLOG CONTENT ================= */}
        <div className="col-lg-8">
          <article className="bg-white rounded-4 shadow-sm p-4 p-md-5">
            <h1 className="mb-3">{blog.title}</h1>

            <p className="text-muted mb-4">
              {blog.date} • {blog.author}
            </p>

            <div className="d-flex justify-content-center mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  maxWidth: "100%",
                  width: "520px",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                }}
              />
            </div>

            <div style={{ whiteSpace: "pre-line", lineHeight: 1.8 }}>
              {blog.content}
            </div>
          </article>
        </div>

        {/* ================= RIGHT : SIDEBAR ================= */}
        {/* ================= RECENT POSTS ================= */}
        <div className="col-12 col-lg-4 order-2">
          <div className="position-relative" style={{ height: "100%" }}>
            <div
              className="sticky-lg-top"
              style={{ top: "120px" }} // MUST be >= navbar height
            >
              <aside className="bg-white rounded-4 shadow-sm p-4">
                <h5 className="fw-semibold mb-3">Recent Posts</h5>

                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                  {otherBlogs.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/blog/${b.slug}`}
                        className="d-flex gap-3 text-decoration-none align-items-start"
                      >
                        {/* THUMBNAIL */}
                        <img
                          src={b.image}
                          alt={b.title}
                          style={{
                            width: "64px",
                            height: "64px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            flexShrink: 0,
                          }}
                        />

                        {/* TEXT */}
                        <div>
                          <div
                            className="fw-medium"
                            style={{ color: "#2563eb", lineHeight: 1.4 }}
                          >
                            {b.title}
                          </div>
                          <div className="small text-muted">{b.date}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
      </div>
    </div>
  );
}
