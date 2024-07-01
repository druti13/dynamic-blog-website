import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPost } from '../services/api';
import BlogPost from '../components/BlogPost';
import ShareButtons from '../components/ShareButtons';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await fetchBlogPost(id);
        setPost(postData);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BlogPost post={post} />
      <ShareButtons />
    </div>
  );
};

export default BlogPostPage;
