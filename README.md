# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
  - [2.1 Historia de usuario ](#2.1-Histroia-de-usurario)
  - [2.2 Diseño de interfaz de usuario](#2.2-diseño-de-interfaz-de-usuario)
* [3. consideraciones generales](#3-consideraciones-generales)
* [4. conclusiones](#4-conclusiones)

## 1. Preámbulo

Las redes sociales son plataformas digitales diseñadas para permitir la interacción entre usuarios a través de internet. Estas redes proporcionan un entorno virtual donde las personas pueden crear perfiles, establecer conexiones con otros usuarios y participar en actividades sociales en línea; a través de ellas, los usuarios pueden compartir publicaciones, fotos, videos y enlaces, así como interactuar mediante comentarios, mensajes privados y reacciones. Estas plataformas ofrecen diversas funcionalidades como la creación de comunidades, la organización de eventos, la promoción de productos o servicios, la difusión de noticias y el desarrollo de relaciones personales o profesionales.

Hay redes sociales de todo tipo y para todo tipo de intereses. Estas plataformas digitales han tenido un impacto significativo en la forma en que nos comunicamos, nos informamos y nos relacionamos, pues han transformado la manera en que interactuamos tanto a nivel individual como colectivo.



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

criterios de aceptacion: 
- Crear un usuario nuevo con correo
- Poder crear un usuario nuevo mediante Google
- Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.

Definición de terminado:



:musical_note:  2:  Como usuaria de B-Music quiero visualizar un Muro interactivo para poder ver las publicaciones de los usuarios 


criterios de aceptacion:
- El usario puede visualizar un muro de reccomendaciones recientes de ususarios del social network.
- Se puede dar y quitar like a una publicación. Máximo uno por usuario.
- Cada publicación lleva un conteo de los likes.

Definición de terminado:



:musical_note:  3: Como usuaria de B-Music quiero poder compartir y/o eliminar recomendaciones para poder compartir información sobre algún género músical o banda que me interesa

criterios de aceptacion:
- Poder publicar un post.
- Al publicar, se debe validar que exista contenido en el input.
- Poder eliminar un post específico.
- Pedir confirmación antes de eliminar un post.

Definición de terminado:



:musical_note:  4: Como usuaria de B-Music quiero poder editar mis recomendaciones para poder corregir lo que ya he publicado

criterios de aceptacion:

- Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
- Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
- Al recargar la página debo de poder ver los textos editados.

Definición de terminado:


### 2.2. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
Una vez definidas las Historias de Usuario, y como primer paso en el diseño de la interfaz, se elaboraron los prototipos de baja fidelidad para vista móvil mediante la herramienta de diseño visual Figma.

#### Prototipo de alta fidelidad
Seguidamente se diseñó la Interfaz de Usuario también mediante la herramienta de Figma. Se presenta a continuación el diseño final de la red social propuesta, la cual busca cumplir con los fundamentos de visual design:



## 3. Consideraciones generales
La lógica de este proyecto está implementada completamente en JavaScript (ES6+), HTML y CSS; en ningun momento se utilizaron frameworks o librerías de CSS y JS.

Para la creación de la cuenta del usuario e inicio de sesión se utilizó Firebase como servicio externo para la persistencia de datos; esta plataforma facilita la creación de las cuentas de acceso y autenticación con correo y contraseña, así como también con cuentas de Google. En esta fase, se permite solamente el acceso a usuarios con cuentas y correos electrónicos válidos; no se permiten usuarios repetidos y no permite la legibilidad en el campo de la contraseña. Si hay errores, se muestran mensajes descriptivos para ayudar al usuario a corregirlos.

En el Muro/timeline de la red social se valida el contenido en el input para poder realizar una publicación. En esta fase también se hace uso de firebase para que sea posible publicar un post, dar y quitar like a una publicación (máximo uno por usuario), para llevar el conteo de los likes y para poder eliminar un post específico; se pide confirmación antes de eliminar un post. Al dar click para editar un post, se cambia el texto por un input que permite editar el texto y luego guardar los cambios; al guardar los cambios cambia de vuelta a un texto normal pero con la información editada y al recargar la página se logran evidenciar los textos editados.

## 4. Conclusiones
 - Se desarrolló una SPA con temática de red social.
 - Se empleó un servicio externo para la persistencia de datos de la aplicación
 - Se aplicaron los conceptos de responsividad en el desarrollo de las vistas (templates); las diferentes vistas de la red social logran visualizarse adecuadamente en dispositivos de pantallas grandes (computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.).
 - El código se expuso en GitHub (commit/push) y la interfaz fue desplegada usando el servicio de hosting de Firebase
Este proyecto fue desarrollado en triada bajo la metodología de Scrum implementando Trello para la planeación y consecución de los objetivos





