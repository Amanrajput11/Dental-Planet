"use client";

import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        Dental Blogs
      </h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Tips, guides & insights for a healthy smile
      </p>

      <div style={{ display: "grid", gap: "24px" }}>
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            style={{
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              background: "#fff",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
              {blog.title}
            </h2>

            <small style={{ color: "#888" }}>
              {blog.date} • {blog.author}
            </small>

            <p style={{ marginTop: "12px", color: "#444" }}>
              {blog.excerpt}
            </p>

            <Link
              href={`/blog/${blog.slug}`}
              style={{
                display: "inline-block",
                marginTop: "12px",
                color: "#2563eb",
                fontWeight: 500,
              }}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
