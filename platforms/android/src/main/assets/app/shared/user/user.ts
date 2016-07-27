var validator = require("email-validator");

export class User {
  email: string;
  name: string;
  password: string;
  phone: string;

  validateUser() {
    let phoneRegex: any = /^[0-9]{10}$/;
    if (!validator.validate(this.email) || !this.name) {
      return false;
    } else if (!this.password) {
      return false;
    }
    else if (this.phone && !phoneRegex.test(this.phone)) {
      return false;
    } else {
      return true;
    }
  }

}