import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import './posts.scss';

const Posts = ({ posts }) => (
  <>
    <main>
      <h1 className="main-title">React Them All</h1>
      <div className="container-post">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </main>
  </>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Posts;
