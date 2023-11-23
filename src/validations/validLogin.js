// -------------------- Función validar el formato del Email --------------------//
function emailFormat(input) {
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (validRegex.test(input)) {
    // test ejecuta una búsqueda con la expresión regular
    // si encontra una coincidencia entre una expresión regular y una cadena especificada.
    // Devuelve verdadero si hay una coincidencia; falso en caso contrario
    return validRegex.test(input);
  }
  return 'Email invalido';
}

// -------------------- Función validar el formato del Password --------------------//
function passwordFormat(input) {
  let msjError = '\nLa contraseña:';
  const hasSpace = /\s/.test(input); // true o false: tiene espacios?
  const hasNumbers = input.match(/\d+/) >= 1; // true o false: tiene números?
  const hasAtLeastSixDigits = input.length >= 6; // true o false: tiene a menos 6 dígitos?
  if (hasAtLeastSixDigits && !hasSpace && hasNumbers) {
    // Si cumple con los requisitos,
    return true;
  }
  // si no cumple alguno, incorpora el msj correspondiente
  if (hasSpace) {
    msjError += '\n-no debe contener espacios';
  }
  if (!hasNumbers) {
    msjError += '\n-debe contener al menos un número';
  }
  if (!hasAtLeastSixDigits) {
    msjError += '\n-debe tener al menos 6 dígitos';
  }
  return msjError;
}

// -------------------- Función que se exporta para validar Email y Password --------------------//
export function inputsFormats(email, password) {
  let msjError = '';
  // Valida que todo esté Ok
  if (
    emailFormat(email.value) === true
    && passwordFormat(password.firstElementChild.value) === true) {
    return true;
  }
  if (emailFormat(email.value) === true) {
    // El correo está bien?...
    email.style.border = '1px solid rgb(28, 28, 28)';
  } else {
    // incorpora el msj y cambia el formato
    email.style.border = '3px solid #CE27FA';
    msjError += emailFormat(email.value);
  }
  if (passwordFormat(password.firstElementChild.value) === true) {
    // La contraseña está bien?...
    password.style.border = '1px solid rgb(28, 28, 28)';
  } else {
    // incorpora el msj y cambia el formato
    password.style.border = '3px solid #CE27FA';
    msjError += passwordFormat(password.firstElementChild.value);
  }
  throw new Error(msjError);
}

/*

Explicación de la expresión regular:

/^[a-zA-Z0-9._-]+
Means that the email address must begin with alpha-numeric characters (both lowercase and uppercase
characters are allowed). It may have periods,underscores and hyphens.

@
There must be a ‘@’ symbol after initial characters.

[a-zA-Z0-9.-]+
After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’)
and hyphens(‘-‘).

\.
After the second group of characters there must be a period (‘.’). This is to separate domain and
subdomain names.

[a-zA-Z]{2,4}$/
Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both
lowercase and uppercase letters are allowed.
{2,4} indicates the minimum and maximum number of characters. This will allow domain names with
2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz).

*/
