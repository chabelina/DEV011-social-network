// aqui exportaras las funciones que necesites

export const error = () => {
  // aqui tu codigo
  //console.log('404 no se pudo encontrar la página');
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page no found, please go home';
  return title;
};
