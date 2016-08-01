var validator = require("email-validator");

export class User {
  email: string;
  name: string;
  password: string;
  phone: string;

  validateUser(processType) {
    let phoneRegex: any = /^[0-9]{10}$/;
    if (!validator.validate(this.email)) {
      return false;
    } else if (!this.password) {
      return false;
    }
    else if (processType && processType === "signUp" && (!phoneRegex.test(this.phone) || !this.name)) {
      return false;
    } else {
      return true;
    }
  }
}