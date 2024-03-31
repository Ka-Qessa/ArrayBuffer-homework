export class Validator {
    validateUsername(username) {
      const regex = /^(?!.*[0-9]{4,})[a-zA-Z0-9_-]{3,}[a-zA-Z-]$/;
      return regex.test(username);
    }
  }