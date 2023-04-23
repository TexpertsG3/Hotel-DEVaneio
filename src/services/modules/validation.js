export function validateAccess(input, validStrings) {
  return validStrings.includes(input);
}

export function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function validateCase(email) {
  return /[A-Z]/.test(email);
}