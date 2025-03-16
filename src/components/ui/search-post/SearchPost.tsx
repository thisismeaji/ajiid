import React, { useState } from "react";
import Styles from "../search-post/searchpost.module.css";

interface SearchPostProps {
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
}

export default function SearchPost({ setSearchQuery, setCurrentPage }: SearchPostProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setQuery("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className={Styles.search}>
      <input
        type="search"
        placeholder="Search Post..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
      {query && <button onClick={handleClear}>Clear</button>}
    </div>
  );
}
