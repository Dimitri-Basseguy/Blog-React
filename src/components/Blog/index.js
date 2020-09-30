// == Import npm
import React from 'react';

// == Import
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import Header from '../Header';
import Footer from '../Footer';
import Posts from '../Posts';
import './blog.scss';

// == Composant
const Blog = () => (
  <div className="blog">
    <Header categories={categoriesData} currentCategory="Accueil" />
    <Posts posts={postsData} />
    <Footer />
  </div>
);

// == Export
export default Blog;
