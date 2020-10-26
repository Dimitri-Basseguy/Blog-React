import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import './posts.scss';

const createMarkup = (htmlCode) => {
  return {
    __html: DOMPurify.sanitize(htmlCode),
  };
};

const Post = ({ title, category, excerpt }) => (
  <article className="post">
    <h2 className="post__title">{title}</h2>
    <div className="post__category">{category}</div>
    <p className="post__excerpt" dangerouslySetInnerHTML={createMarkup(excerpt)} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
