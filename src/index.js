// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// install router : yarn add react-router-dom
// use react router dom, je dois englober toute mon application dans un composant router
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import Blog from 'src/components/Blog';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Router>
    <Blog />
  </Router>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
