import React from 'react';
import PropTypes from 'prop-types';

import './posts.scss';

const Post = ({ title, category, excerpt }) => (
  <article className="post">
    <h2 className="post__title">{title}</h2>
    <div className="post__category">{category}</div>
    <p className="post__excerpt">{excerpt}</p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
