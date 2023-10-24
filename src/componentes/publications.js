const user_name = "Pepita"
const user_img = "https://c0.klipartz.com/pngpicture/178/595/gratis-png-perfil-de-usuario-iconos-de-computadora-inicio-de-sesion-avatares-de-usuario.png"
const description = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,"
const gender = "Indie Rock"
const platform = "Youtube"

const customHtml = `
  <div class="publications">
    <div>
      <div>
        <img src=${user_img} alt="profile img"/>
        <p>${user_name}<p/>
      </div>

      <div>
        <img alt="delete icon"/>
        <img alt="edit icon"/>
      </div>
    </div>

    <p class="description">${description}<p/>
    <div>
      <span>${gender}<span/>
      <span>${platform}<span/>
    </div>
  </div>
`;

export const publications = () => {
  const publications = document.createElement("article");
  publications.innerHTML = customHtml;

  return publications;
};