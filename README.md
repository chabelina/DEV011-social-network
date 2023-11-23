# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
  - [2.1 Historia de usuario ](#2.1-Histroia-de-usurario)
  - [2.2 Diseño de interfaz de usuario](#2.2-diseño-de-interfaz-de-usuario)
* [3. consideraciones generales](#3-consideraciones-generales)
* [4. conclusiones](#4-conclusiones)

## 1. Preámbulo

![vista_principal_bmusic](image.png)

Las redes sociales son plataformas digitales diseñadas para permitir la interacción entre usuarios a través de internet. Estas redes proporcionan un entorno virtual donde las personas pueden crear perfiles, establecer conexiones con otros usuarios y participar en actividades sociales en línea; a traves de ella interactuar mediante comentarios, mensajes y reacciones. Estas plataformas ofrecen diversas funcionalidades como la creación de comunidades, la organización de eventos, la promoción de productos o servicios, la difusión de noticias y el desarrollo de relaciones personales o profesionales.

Hay redes sociales de todo tipo y para todo tipo de intereses. Estas plataformas digitales han tenido un impacto significativo en la forma en que nos comunicamos, nos informamos y nos relacionamos, pues han transformado la manera en que interactuamos tanto a nivel individual como colectivo.

Este repositorio contiene el proyecto B-Music, una red social diseñada para los amantes de la música que buscan descubrir, compartir y conectar a través de sus experiencias musicales. B-Music está aquí para transformar la manera en que exploramos y disfrutamos de la música, brindando una plataforma única para descubrimientos personalizados y conexiones auténticas.

## 2. Resumen del proyecto

Para este proyecto se propuso la elaboración de una Red Social con libre temática que permita a cualquier usuario crear una cuenta de acceso y loguearse con ella, así como crear, editar, borrar y "likear" publicacciones.

"B-Music", una Red Social enfocada dar opinion acerca de algun genero de musica. Esta plataforma fue construida como una Single-page Application (SPA)responsive (con más de una vista / página) en la que es posible leer y escribir datos. Aquí se aplican los conceptos de responsividad en el desarrollo de las vistas (templates), se implementa un router para la navegación entre las diferentes vistas de la aplicación, se emplea un servicio externo para la persistencia de datos de la aplicación y se crea una suite de pruebas unitarias que permiten testear código asíncrono.

En base al conocimiento obtenido del usuario, se trabajaron las siguientes preguntas:

¿Quiénes son los principales usuarios del producto? Este proyecto está diseñado para atraer a una amplia audiencia de entusiastas de la música que comparten un interés común en explorar, descubrir y disfrutar de diversos géneros musicales.
- Personas apasionadas por la música que desean explorar géneros, artistas y canciones fuera de su repertorio actual. 
- Usuarios que buscan descubrir pistas que se adapten a su estado de ánimo o contexto específico.
- Individuos curiosos que disfrutan explorando nuevos géneros musicales y descubriendo artistas emergentes.
- Usuarios que buscan recomendaciones personalizadas para ampliar su biblioteca musical.
- Personas encargadas de planificar eventos, fiestas o reuniones sociales que buscan sugerencias musicales que se ajusten al ambiente deseado.

Esta aplicación proporciona una plataforma interactiva y personalizada para que los usuarios descubran, compartan y disfruten de la música que resuene con sus preferencias individuales. ¡Únete a nuestra comunidad musical y déjanos ser tu guía en el vibrante mundo de la música! 

### 2.1 Historia de usuario

Como resultado del proceso de investigación se obtuvieron las siguientes Historias de Usuario:

:musical_note:  1: Como aficionada de la música poco conocida/indie quiero tener la capacidad de poder registrar una cuenta de usuario e iniciar sesión para formar parte de la comunidad virtual que ofrece B-Music, en la búsqueda y descubrimiento de canciones underground

* Criterios de aceptacion: 

  - Crear un usuario nuevo con correo
  - Poder crear un usuario nuevo mediante Google
  - Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.

* Definición de terminado:

  - Crear un usuario en firebase y guardar el `userID` y nombre en una colección `users`.
  - Crear un usuario nuevo mediante `loginGoogle()`, editando el `prompt: 'select_account'`
  - Verificar que el usuario está logueado antes renderear la función `publications()`.

:musical_note:  2:  Como usuaria de B-Music quiero visualizar un Muro interactivo para poder ver las publicaciones de los usuarios 


* Criterios de aceptacion:

  - El usario puede visualizar un muro de reccomendaciones recientes de ususarios del social network.
  - Se puede dar y quitar like a una publicación. Máximo uno por usuario.
  - Cada publicación lleva un conteo de los likes.

* Definición de terminado:

  - Ordenar por fecha la colección `posts` antes de usar `renderPost()`.
  - Revisar si el `userID` del usuario actual se encuentra en el array de likes de cada post y agregarlo o eliminarlo al dar like, según sea el caso.
  - Cambiar el `display = 'none'/'flex'` display de la imagen al momento de dar like o quitarlo.
  - Al unsar `renderPost()` se tiene que validar si el usuario logueado le dio like al post.
  - Agregar al lado de la imagen el valor de `likesDB.length`.

:musical_note:  3: Como usuaria de B-Music quiero poder compartir y/o eliminar recomendaciones para poder compartir información sobre algún género músical o banda que me interesa

* Criterios de aceptacion:

  - Poder publicar un post.
  - Al publicar, se debe validar que exista contenido en el input.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un post.

* Definición de terminado:

  - Agregar un botón `newPostIcon` que muestre un modal `newPost` al darle click.
  - El modal contiene un `inputTextPost` y un `buttonSaveNewPost` para guardar el post en la colección `posts`.
  - Antes de guardar el post, se debe validar el contenido en el `inputTextPost` que no sea vacío o espacios en blanco.
  - Agregar un botón `trashIcon` que abre un modal `deletePost`.
  - `trashIcon` sólo aparece en los post publicados por el usuario logueado.
  - El modal `deletePost` pide confirmación antes de eliminar un post.

:musical_note:  4: Como usuaria de B-Music quiero poder editar mis recomendaciones para poder corregir lo que ya he publicado

* Criterios de aceptacion:

  - Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
  - Al recargar la página debo de poder ver los textos editados.

* Definición de terminado:

  - Agregar un botón `penIcon` que muestre un modal `editPost` al darle click.
  - El modal `editePost` muestra el texto de la colección `posts` en un input editable 
  - Agregar el botón `buttonSaveEditedPost` que permite guardar los cambios.
  - Asegurar que los cambios se rendereen en tiempo real al momento de guardar los cambios.

De esta manera nos organizamos en figma para realizar la historias de usuario:

![Alt text](image-1.png)

### 2.2. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
Una vez definidas las Historias de Usuario, y como primer paso en el diseño de la interfaz, se elaboraron los prototipos de baja fidelidad para vista móvil mediante la herramienta de diseño visual Figma.

<img width="791" alt="image" src="https://github.com/chabelina/DEV011-social-network/assets/123765828/29bebed8-f0a2-4517-8600-dc16b52c8ce6">

#### Prototipo de alta fidelidad
Seguidamente se diseñó la Interfaz de Usuario también mediante la herramienta de Figma. Se presenta a continuación el diseño final de la red social propuesta, la cual busca cumplir con los fundamentos de visual design:

<p align="center" width="100%">
    <img width="33%" src="src\img\vidprototipo.gif">
</p>

## 3. Consideraciones generales
La lógica de este proyecto está implementada completamente en JavaScript (ES6+), HTML y CSS; en ningun momento se utilizaron frameworks o librerías de CSS y JS.

Para la creación de la cuenta del usuario e inicio de sesión se utilizó Firebase como servicio externo para la persistencia de datos; esta plataforma facilita la creación de las cuentas de acceso y autenticación con correo y contraseña, así como también con cuentas de Google. En esta fase, se permite solamente el acceso a usuarios con cuentas y correos electrónicos válidos; no se permiten usuarios repetidos y no permite la legibilidad en el campo de la contraseña. Si hay errores, se muestran mensajes descriptivos para ayudar al usuario a corregirlos.

En el Muro/timeline de la red social se valida el contenido en el input para poder realizar una publicación. En esta fase también se hace uso de firebase para que sea posible publicar un post, dar y quitar like a una publicación (máximo uno por usuario), para llevar el conteo de los likes y para poder eliminar un post específico; se pide confirmación antes de eliminar un post. Al dar click para editar un post, se cambia el texto por un input que permite editar el texto y luego guardar los cambios; al guardar los cambios cambia de vuelta a un texto normal pero con la información editada y al recargar la página se logran evidenciar los textos editados.

## 4. Conclusiones
 - Se desarrolló una SPA con temática de red social.
 - Se empleó un servicio externo para la persistencia de datos de la aplicación.
 - Se aplicaron los conceptos de responsividad en el desarrollo de las vistas (templates); las diferentes vistas de la red social logran visualizarse adecuadamente en dispositivos de pantallas grandes (computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.).
 - El código se expuso en GitHub (commit/push) y la interfaz fue desplegada usando el servicio de hosting de Firebase.
 - Este proyecto fue desarrollado en triada bajo la metodología de Scrum implementando Trello para la planeación y consecución de los objetivos.

 🎵🚀 Creemos que la música tiene el poder de unir a las personas y enriquecer sus vidas, y B-Music está aquí para facilitar esa conexión. Únete a nosotros en este emocionante viaje musical y descubre un mundo de posibilidades auditivas. ¡Que la música nunca pare! 🎵🚀











