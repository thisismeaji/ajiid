"use client";

import React, { useState } from "react";
import Styles from "../page.module.css";
import posts from "@/data/posts";
import { Eye, MessageCircleMore, PencilLine } from "lucide-react";
import SearchPost from "@/components/ui/search-post/SearchPost";
import Pagination from "@/components/ui/pagination/Pagination";
import PostsPerPageSelector from "@/components/ui/combo-box/PostsPerPageSelector";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

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

      <SearchPost
        setSearchQuery={setSearchQuery}
        setCurrentPage={setCurrentPage}
      />

      {selectedPosts.length > 0 ? (
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
      ) : (
        <p className={Styles.notFound}>No posts found.</p>
      )}

      {/* Navigation Bar */}
      <div className={Styles.nav}>
        <PostsPerPageSelector
          postsPerPage={postsPerPage}
          setPostsPerPage={setPostsPerPage}
          setCurrentPage={setCurrentPage}
        />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
