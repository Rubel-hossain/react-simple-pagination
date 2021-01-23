import React from "react";
export default function Posts({ loading, posts }) {
  if (loading) {
    return <h2>Loading .......</h2>;
  } else {
    return (
      <ul className="list-group my-4">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
}
