
export function emailFormat (input){
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return validRegex.test(input)
}

/* export function passwordFormat (input){
  const hasSpace = /\s/.test(input)
  const hasNumbers = input.match(/\d+/) >= 1
  console.log('- :',hasSpace,'dig:',hasNumbers,'inp:',input.length>= 6);
  try {
    input.length >= 6 && !hasSpace && hasNumbers
    return input.length >= 6 && !hasSpace && hasNumbers
  }
  if ( ){
return true
  }
return false
} */










/* 

/^[a-zA-Z0-9._-]+    :  Means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.


@:   There must be a ‘@’ symbol after initial characters.

[a-zA-Z0-9.-]+       : After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-‘).

\.    : After the second group of characters there must be a period (‘.’). This is to separate domain and subdomain names.

[a-zA-Z]{2,4}$/      : Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed.
{2,4} indicates the minimum and maximum number of characters. This will allow domain names with 2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz). 


*/