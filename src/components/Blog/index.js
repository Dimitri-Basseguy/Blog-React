// == Import npm
import React from 'react';
// Composant route : faire un rendu en fonction de l'url courante.
import { Route } from 'react-router-dom';

// == Import
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';

import { getPostByCategory } from 'src/utils/selectors';

import Header from '../Header';
import Footer from '../Footer';
import Posts from '../Posts';

import './blog.scss';

/* Pour avoir automatiquement une route par catégorie
- une fonction pou récuperer les articles selon catégorie
- une boucle sur les catégories
*/

// == Composant
const Blog = () => {
  const postsReact = getPostByCategory(postsData, 'React');

  // console.log(getPostByCategory(postsData, 'Autre'));

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      {categoriesData.map((category) => (
        <Route exact path={category.route} key={category.label}>
          <Posts posts={getPostByCategory(postsData, category.label)} />
        </Route>
      ))}
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
