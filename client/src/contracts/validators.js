// regex
const lowerCase = '(?=.*[a-z])';
const upperCase = '(?=.*[A-Z])';
const numbers = '(?=.*[0-9])';
const specialChars = '(?=.[!@#\$%\^&])';

// validators
export const password = (string) => {
  const isComplex = new RegExp(lowerCase + upperCase + numbers + specialChars);
  if (isComplex.test(string)) {
    return {
      success: true,
    }
  } return {
    success: false,
    error: 'That password is too easy! Try mixing it up.'
  }
};

export const minLength = (string, length) => {
  if (string.length < length) {
    return {
      success: false,
      error:  `That\'s too short. Must be at least ${length} characters.`
    }
  }
};

export const maxLength = (string, length) => {
  if (string.length > maxLength) {
    return {
      success: false,
      error:  `That\'s too long. Must be fewer than ${length} characters.`
    }
  }
};