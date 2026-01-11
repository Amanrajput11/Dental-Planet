"use client";

import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="py-5">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Dental Blogs</h1>
          <p className="text-muted">
            Tips, guides & insights for a healthy smile
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.slug} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm blog-card">
                {/* IMAGE */}
                <div className="ratio ratio-16x9">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-fit-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-semibold">{blog.title}</h5>

                  <small className="text-muted mb-2">
                    {blog.date} • {blog.author}
                  </small>

                  <p className="text-muted small flex-grow-1">{blog.excerpt}</p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="btn btn-primary mt-auto"
                  >
                    Read Blog →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
