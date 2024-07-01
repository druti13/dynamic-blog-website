import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../services/api';
import './BlogList.css'; 

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Recent Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-card">
            <img
              src={post.image} // Assuming post.image is the correct path from your API
              alt={post.title}
              className="blog-post-image"
            />
            <div className="blog-post-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-author">By {post.author}</p>
              <p className="blog-post-snippet">{post.content.substring(0, 150)}...</p>
              <Link to={`/blog/${post.id}`} className="blog-post-read-more">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
