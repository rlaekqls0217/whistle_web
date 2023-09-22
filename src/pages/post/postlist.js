import React, { useState } from 'react';
import './postlist.css'; // assuming this is the styling for your board

// ... other imports and components you may need

function Board() {
  // Sample data for posts
  const samplePosts = [
    { id: 1, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 2, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 3, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 4, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 5, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 6, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 7, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 8, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 9, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 10, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
    { id: 11, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
  ];

  const postsPerPage = 5;
  const totalPages = Math.ceil(samplePosts.length / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentPosts = samplePosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="board">
      <div className="boardHeader">
        <div className="boardTitle">글 목록</div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {currentPosts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.image} alt="Post Image" className="postImage" />
          <div className="postInfo">
            <div className="postRating">Rating: {post.rating}</div>
            <div className="postTitle">{post.title}</div>
            <div className="postContentSummary">{post.content}</div>
            <div className="postHashtags">Hashtags: {post.hashtags.join(', ')}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;
