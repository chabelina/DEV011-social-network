import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './firebase-config.js';

// Inicializamos la autenticación
export const auth = getAuth(app);

export const user = auth.currentUser;

// Declaramos el nuevo proveedor de Google
const provider = new GoogleAuthProvider();
auth.languageCode = 'es'; // definimos el idioma

// -------------------- Función para el logueo con Google --------------------//
export async function loginGoogle() {
  provider.setCustomParameters({ prompt: 'select_account' }); // Con este parámetro de indica que se requiere el popup para seleccionar la cuenta de Google
  try {
    const response = await signInWithPopup(auth, provider); // intenta iniciar sesión con el popup
    // console.log('-+-+-+-', response);
    return response.user;
  } catch (error) {
    return new Error(error);
  }
}

// -------------------- Función para cerrar sesión --------------------//
export async function logout() {
  await signOut(auth);
}

// -------------------- Función para inicio de sesión con Email --------------------//
export async function loginEmail(email, password) {
  try {
    const user = auth.currentUser;
    // revisamos si existe una sesión abierta
    if (user) {
      // En caso de que esté abierta...
      throw new Error(`Tiene una sesión abierta: ${user.uid}`);
      // se elimina el signo de + y se coloca backtips
      //  para que sea de manera dinamica y mas simplificada
      // Lanza un error en consola indicando el uid de usuario en sesión
    } else {
      // Si no hay sesión abierta,
      try {
        // Intenta ingresar con email y pasword...
        const response = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value,
        );
        const newUser = response.user;
        // si logra ingresar, guarda el user
        email.style.border = '1px solid rgb(28, 28, 28)'; // y regresa al diseño original del los inputs
        password.style.border = '1px solid rgb(28, 28, 28)';
        return newUser;
      } catch (e) {
        // Si no logra ingresar, usamos el error 'e' de signInWithEmailAndPassword...
        let mensajeErrorLogin; // declaramos un msj de error undefined para editarlo personalmente
        // Extraemos el msj del error con e.message y

        // luego sacamos de ese string el tipo del error
        // contenido entre / y ), por ejemplo:(auth/invalid-email)
        // y por último editamos nuestro msj personalizado
        // 'mensajeErrorLogin' dependiendo del tipo de error (preguntar sobre esta linea)
        if (
          e.message.substring(
            e.message.indexOf('/') + 1,
            e.message.lastIndexOf(')'),
          ) === 'invalid-email'
        ) {
          mensajeErrorLogin = 'Correo incorrecto';
          email.style.border = '3px solid #CE27FA'; // y pone el cuadro de email en rojo
        } else if (
          e.message.substring(
            e.message.indexOf('/') + 1,
            e.message.lastIndexOf(')'),
          ) === 'invalid-login-credentials'
        ) {
          mensajeErrorLogin = 'Datos incorrectos';
          email.style.border = '3px solid #CE27FA'; // y pone el cuadro de email en rojo
          password.style.border = '3px solid #CE27FA'; // y pone el cuadro de password en rojo
        } else if (
          e.message.substring(
            e.message.indexOf('/') + 1,
            e.message.lastIndexOf(')'),
          ) === 'missing-password'
        ) {
          mensajeErrorLogin = 'Ingrese contraseña';
          email.style.border = '1px solid rgb(28, 28, 28)'; // y pone el cuadro de email en rojo
          password.style.border = '3px solid #CE27FA'; // y pone el cuadro de password en rojo
        }
        // Por último mandamos el error con nuestro msj personalizado,
        // esto nos servirá para mostrarlo en la vista del usuario
        throw new Error(mensajeErrorLogin || e);
        // se agrega 'e' en caso de que mande un error diferente a los definidos
      }
    }
  } catch (error) {
    // este sólo está en caso de que alguna de las promesas falle y poder tener el error en consola
    throw new Error(error);
  }
}

// -------------------- Función para crear nuevo usuario --------------------//
export async function createUser(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ); // intenta crear usuario
    const user = response.user;
    return user;
  } catch (error) {
    return new Error(error);
  }
}
