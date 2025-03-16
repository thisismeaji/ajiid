import React from "react";
import Styles from "../combo-box/postsperpage.module.css";

interface PostsPerPageSelectorProps {
  postsPerPage: number;
  setPostsPerPage: (value: number) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PostsPerPageSelector: React.FC<PostsPerPageSelectorProps> = ({
  postsPerPage,
  setPostsPerPage,
  setCurrentPage,
}) => {
  return (
    <div className={Styles.comboBox}>
      <label htmlFor="combo-box">Posts per page</label>
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
  );
};

export default PostsPerPageSelector;
