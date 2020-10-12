// == Import npm
import React from 'react';
// Composant route : faire un rendu en fonction de l'url courante. 
// + Composant switch : seulement la premier route qui correspond est rendue 
// => utile pour page d'erreur 404
import { Link, Route, Switch, Redirect } from 'react-router-dom';

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
const Blog = () => (
  <div className="blog">
    <Header categories={categoriesData} />
    <Switch>
      <Redirect from="/jquery" to="/autre" />
      {categoriesData.map((category) => (
        <Route exact path={category.route} key={category.label}>
          <Posts posts={getPostByCategory(postsData, category.label)} />
        </Route>
      ))}
      <Route>
        <div>
          <img src="https://cdn.dribbble.com/users/1197927/screenshots/8062981/media/498b9f796d031f3c2370130510d63f2f.gif" alt="error 404"/>
          <h1>Sacrebleu ! Page non trouvée. (erreur 404) | <Link to="/">Retourner sur l'accueil</Link></h1>
        </div>
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Blog;
