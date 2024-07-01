const mockPosts = [
  {
    id: 1,
    title: 'My dog is starving her self to death..',
    image: '/images/image12.jpg', 
    author: 'John Doe',
    content: '<p>This is the content of the first blog post.</p>',
    authorLinkedIn: 'https://www.linkedin.com/in/johndoe/'
  },
  {
    id: 2,
    title: 'Depression Hits Different..',
    image: '/images/image22.jpg', 
    author: 'Natasha Martini',
    content: '<p>This is the content of the second blog post.</p>',
    authorLinkedIn: 'https://www.linkedin.com/in/janesmith/'
  },
  {
    id: 3,
    title: 'Cancer Survivor shares her Diet Secret..',
    image: '../images/image32.jpg', 
    author: 'Yogjyoti Das',
    content: '<p>This is the content of the second blog post.</p>',
    authorLinkedIn: 'https://www.linkedin.com/in/jane/'
  },
  {
    id: 4,
    title: 'Second Life.........',
    image: '/images/image42.jpg', 
    author: 'Sally Caesar',
    content: '<p>This is the content of the second blog post.</p>',
    authorLinkedIn: 'https://www.linkedin.com/in/ayush/'
  },
  {
    id: 5,
    title: 'Tech job rising...',
    image: '/images/image52.jpg', 
    author: 'Will Potter',
    content: '<p>This is the content of the second blog post.</p>',
    authorLinkedIn: 'https://www.linkedin.com/in/janesmit/'
  }
];

export const fetchBlogPosts = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 1000); // Simulate delay for API call
  });
};

export const fetchBlogPost = async (postId) => {
  return new Promise((resolve, reject) => {
    const post = mockPosts.find(p => p.id === parseInt(postId));
    if (post) {
      setTimeout(() => {
        resolve(post);
      }, 500); 
    } else {
      reject(new Error('Post not found'));
    }
  });
};
