// == Import npm
import React, { useState, useEffect } from 'react';
// Composant route : faire un rendu en fonction de l'url courante.
// + Composant switch : seulement la premier route qui correspond est rendue
// => utile pour page d'erreur 404
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// librairie pour faciliter les appel ajax
import axios from 'axios';

// == Import
import categoriesData from 'src/data/categories';
// import postsData from 'src/data/posts';

import { getPostByCategory } from 'src/utils/selectors';

import Loader from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import Posts from '../Posts';
import Error404 from '../404';

import './blog.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

/* Pour avoir automatiquement une route par catégorie
- une fonction pou récuperer les articles selon catégorie
- une boucle sur les catégories
*/

// == Composant
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(categoriesData);
  // console.log(categories);

  /**  indique si on est en cours de chargement */
  const [loading, setLoading] = useState(true);

  const loadPosts = () => {
    // affiche 'false' => la mise à jour du state est asynchrone (pareil avec
    // setState), on a accès à la nouvelle valeur seulement au moment du rendu
    // suivant du composant
    // console.log(loading);

    // console.log('on va charger les articles');

    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
      .then((response) => {
        // callback exécutée en cas de succès (par exemple code de retour 200)
        // console.log('success: ', response);
        setPosts(response.data);
      })
      .catch((error) => {
        // callback exécutée en cas d'échec (par exemple code de retour 404)
        console.log('error: ', error);
      })
      .finally(() => {
        // callback exécutée dans tous les cas, après succès ou après échec =>
        // permet notamment d'enlever un loader
        // console.log('finally');
        setLoading(false);
      });
    // console.log('on a lancé le chargement des articles');
  };

  // useEffect est équivalent à componentDidmount + componentDidUpdate pas de 2eme argument :
  // useEffect(() => {
  //   console.log('appel à useEffect');
  // });

  // useEffect écrit avec 2eme argument (tableau de dépendances)
  // exécute l'effet après le 1er rendu,
  // puis après les autres rendus seulement si l'argument (loading) a changé
  // useEffect(() => {
  //   console.log('loading a changé de valeur');
  // }, [loading]);

  // si argument vide ([]) exécute seulement aprs le 1er rendu (componentDidMount)
  // chargemùent des articles pres le 1er rendu
  useEffect(() => {
    // console.log('loading a changé de valeur');
    loadPosts();
  }, []);

  console.log('render blog component');

  return (
    <div className="blog">
      <Header categories={categories} />
      { loading && (
        <Loader
          type="Bars"
          color="#9FEF02"
          height={50}
          width={50}
          timeout={3000}
        />
      )}
      <Switch>
        <Redirect from="/jquery" to="/autre" />
        {categories.map((category) => (
          <Route exact path={category.route} key={category.label}>
            <Posts posts={getPostByCategory(posts, category.label)} />
          </Route>
        ))}
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
