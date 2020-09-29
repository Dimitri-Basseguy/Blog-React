import React from 'react';

import Post from './Post';
import './posts.scss';

const Posts = () => (
  <>
    <main>
      <h1 className="main-title">React Them All</h1>
      <div className="container-post">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  </>
);

export default Posts;
