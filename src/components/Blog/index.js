// == Import npm
import React from 'react';
// Composant route : faire un rendu en fonction de l'url courante.
import { Route } from 'react-router-dom';

// == Import
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import Header from '../Header';
import Footer from '../Footer';
import Posts from '../Posts';
import './blog.scss';

// == Composant
const Blog = () => {
  const postsReact = postsData.filter((post) => post.category === 'React');

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <Route exact path="/">
        <Posts posts={postsData} />
      </Route>
      <Route path="/react">
        <Posts posts={postsReact} />
      </Route>
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
