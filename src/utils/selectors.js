/* eslint-disable import/prefer-default-export */
// fichier pour stocker des fonctions qui permettent de selectionner des choses
// => export nommé car on voudra exporter plusieurs fonction

/**
 * Get posts of a given category, or all ppost if category is 'Accueil'
 * @param {Array} posts All posts
 * @param {String} category Category to filter by
 * @return Array containning posts of a given category
 */
export const getPostByCategory = (posts, category) => {
  // TODO retourner les articles de la catégorie
  if (category === 'Accueil') {
    return posts;
  }
  return posts.filter((post) => post.category === category);
};
