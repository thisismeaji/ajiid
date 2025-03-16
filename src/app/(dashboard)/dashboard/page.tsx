"use client";

import React, { useState } from "react";
import Styles from "../page.module.css";
import posts from "@/data/posts";
import { Eye, MessageCircleMore, PencilLine } from "lucide-react";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className={Styles.postsPage}>
      <div className={Styles.head}>
        <div>
          <h1>Welcome Back!</h1>
          <p>
            Manage your blog posts efficiently. Create, edit, and track your
            published content all in one place.
          </p>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <div className={Styles.listPost}>
        {selectedPosts.map((post) => (
          <div key={post.id} className={Styles.list}>
            <div className={Styles.info}>
              <p>
                <span>{post.category}</span>
                {post.title}
              </p>
              <p>
                {post.status} - {post.date}
              </p>
            </div>
            <div className={Styles.meta}>
              <p>
                <span>
                  <PencilLine width={18} />
                </span>
                {post.writter}
              </p>
              <div>
                <p>
                  <Eye width={18} />
                  {post.views}
                </p>
                <p>
                  <MessageCircleMore width={18} />
                  {post.comments}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={Styles.nav}>
        <div>
          <label htmlFor="combo-box">Row per page</label>
          <select
            id="combo-box"
            value={postsPerPage}
            className={Styles.select}
            onChange={(e) => {
              setPostsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset ke halaman pertama jika jumlah post per halaman berubah
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        {/* Pagination */}
        <div className={Styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={currentPage === 1 ? Styles.disabled : ""}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? Styles.active : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? Styles.disabled : ""}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}