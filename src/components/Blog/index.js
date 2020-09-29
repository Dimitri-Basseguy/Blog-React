// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Posts from '../Posts';
import './blog.scss';

// == Composant
const Blog = () => (
  <div className="blog">
    <Header />
    <Posts />
    <Footer />
  </div>
);

// == Export
export default Blog;
