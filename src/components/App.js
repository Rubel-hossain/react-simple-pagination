import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./posts";
import Pagination from "./pagination";
import "../App.css";
export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber, e) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Hellow App</h2>
            <Posts loading={loading} posts={currentPosts} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
