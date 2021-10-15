const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = lowercaseLetters.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+{}[]";

export function generatePassword(charset: string, maxlength: number) {
  let password = "";

  for (let i = 0; i < maxlength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}

interface GenerateCharsetForPassword {
  useLowerCaseLetters: boolean;
  useUpperCaseLetters: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

export function generateCharset(props: GenerateCharsetForPassword): string {
  let charset = "";

  if (props.useLowerCaseLetters) {
    charset += lowercaseLetters;
  }

  if (props.useUpperCaseLetters) {
    charset += uppercaseLetters;
  }

  if (props.useNumbers) {
    charset += numbers;
  }

  if (props.useSymbols) {
    charset += symbols;
  }

  return charset;
}
