// aqui exportaras las funciones que necesites

export const error = () => {
  const title = document.createElement('h2');
  title.textContent = 'Upsi!, Error 404 page no found, please go home';
  return title;
};
