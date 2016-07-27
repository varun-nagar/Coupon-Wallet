"use strict";
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.validateUser = function () {
        var phoneRegex = /^[0-9]{10}$/;
        if (!validator.validate(this.email) || !this.name) {
            return false;
        }
        else if (!this.password) {
            return false;
        }
        else if (this.phone && !phoneRegex.test(this.phone)) {
            return false;
        }
        else {
            return true;
        }
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map