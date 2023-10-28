// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  //console.log('Hola mundillo! Soy un test de Daniela gg.');
  console.log(window.location.pathname);

  const title = document.createElement('h2');
  title.textContent = "Hola mundillo! Soy un test de index.js."
  return title
};
