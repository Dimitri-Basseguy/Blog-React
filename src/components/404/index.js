import React from 'react';

import {
  Link,
} from 'react-router-dom';

import './404.scss';

const Error404 = () => (
  <div className="error">
    <img src="https://thumbs.gfycat.com/EarnestUnrealisticIrishsetter-max-1mb.gif" alt="error 404" />
    <h1>Sacrebleu ! Page non trouvée. (erreur 404) | <Link to="/">Retourner sur l'accueil</Link></h1>
  </div>
);

export default Error404;
