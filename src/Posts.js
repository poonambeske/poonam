import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="posts-container">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
