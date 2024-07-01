import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' ,background:' beige'}}>
      <img src={post.image} alt={post.title} style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }} />
      <div style={{ flex: 1 }}>
        <h2>{post.title}</h2>
        <p>Author: {post.author}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default BlogPost;

