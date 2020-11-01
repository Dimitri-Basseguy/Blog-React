import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import './posts.scss';

/**
 * Affiche les articles
 * @version 1.0.0
 * @author Dimitri Basseguy
 */
const Posts = ({ posts, category }) => {
  useEffect(() => {
    // console.log('useEffect sur Posts');
    document.title = category;
  });

  return (
    <>
      <main>
        <h1 className="main-title">{category}</h1>
        <div className="container-post">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

Posts.propTypes = {
  /** les articles à afficher */
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  category: PropTypes.string.isRequired,
  // si la prop est de type func, préciser les arguments
  /**
   * Appelé quand la valeur de l'input change
   * @param {string} newValue new value of the input
   */
  // handleChange: PropTypes.func.isRequired
};

export default Posts;
