
export function emailFormat (input){
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  try {
    validRegex.test(input) // test ejecuta una búsqueda con la expresión regular
    // si encontra una coincidencia entre una expresión regular y una cadena especificada. 
    // Devuelve verdadero si hay una coincidencia; falso en caso contrario
    return validRegex.test(input);
  }catch (e){
    throw new Error ('Email con formato incorrecto');
  }
}

export function passwordFormat (input){
  const hasSpace = /\s/.test(input); // true o false: tiene espacios?
  const hasNumbers = input.match(/\d+/) >= 1; //true o false: tiene números?
  const hasAtLeastSixDigits = input.length >= 6; //true o false: tiene a menos 6 dígitos?
  if (hasAtLeastSixDigits && !hasSpace && hasNumbers){
    return true;
  }else if(hasSpace){
    throw new Error('La contraseña no debe contener espacios');
  }else if(hasNumbers){
    throw new Error('La contraseña debe contener al menos un número');
  }else if(hasAtLeastSixDigits){
    throw new Error('La contraseña debe tener al menos 6 dígitos');
  }
}

/* 

bonos de renta fija, gubernamentales, privados, etc

standar and  (10% anual)
fondo indexado de más de 500 empresas incluyendo amazon 

*/




/*

Explicación de la expresión regular: 

/^[a-zA-Z0-9._-]+
Means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.

@
There must be a ‘@’ symbol after initial characters.

[a-zA-Z0-9.-]+
After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-‘).

\.
After the second group of characters there must be a period (‘.’). This is to separate domain and subdomain names.

[a-zA-Z]{2,4}$/
Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed.
{2,4} indicates the minimum and maximum number of characters. This will allow domain names with 2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz). 


*/