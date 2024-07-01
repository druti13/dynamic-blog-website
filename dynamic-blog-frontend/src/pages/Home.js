import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';


const posts = [
  {
    id: 1,
    title: 'Blog 1',
    author: 'John Doe',
    content: 'My dog is starving her self to death.',
    link: '/blog/1', 
    image: '/images/image1.jpg',
  },
  {
    id: 2,
    title: 'Blog 2',
    author: 'Natasha Martini',
    content: 'Depression Hits Different',
    link: '/blog/2', 
    image: '/images/image2.jpg', 
  },
  {
    id: 3,
    title: 'Blog 3 ',
    author: 'Yogjyoti Das',
    content: 'Cancer Survivor shares her Diet Secret..',
    link: '/blog/3', 
    image: '/images/image3.jpg', 
  },
  {
    id: 4,
    title: 'Blog 4',
    author: 'Sally Caesar',
    content: 'Second Life.........',
    link: '/blog/4', 
    image: '/images/image4.jpg', 
  },
  {
    id: 5,
    title: 'Blog 5',
    author: 'Will Potter',
    content: 'Tech job rising...',
    link: '/blog/5', 
    image: '/images/image5.jpg', 
  },
];

function Home() {
  return (
    <div className="home-container">
      {posts.map((post) => (
        <Link to={post.link} key={post.id} className="post-preview">
          <img src={process.env.PUBLIC_URL + post.image} alt={post.title} className="post-image" />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-author">By {post.author}</p>
          <p className="post-content">{post.content}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
